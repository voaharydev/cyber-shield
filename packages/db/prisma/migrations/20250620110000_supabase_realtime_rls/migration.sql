-- Supabase Realtime publication + RLS for cloud UI reads

ALTER PUBLICATION supabase_realtime ADD TABLE "SessionOrdinateur";
ALTER PUBLICATION supabase_realtime ADD TABLE "Ticket";
ALTER PUBLICATION supabase_realtime ADD TABLE "PostePresence";

ALTER TABLE "SessionOrdinateur" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "Ticket" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "PostePresence" ENABLE ROW LEVEL SECURITY;
ALTER TABLE "TransactionCaisse" ENABLE ROW LEVEL SECURITY;

-- Helper: cyber IDs from JWT app_metadata (set by seed-auth script)
CREATE OR REPLACE FUNCTION public.staff_cyber_ids()
RETURNS text[]
LANGUAGE sql
STABLE
AS $$
  SELECT COALESCE(
    ARRAY(
      SELECT jsonb_array_elements_text(
        COALESCE(auth.jwt() -> 'app_metadata' -> 'cyberIds', '[]'::jsonb)
      )
    ),
    ARRAY[]::text[]
  );
$$;

CREATE OR REPLACE FUNCTION public.staff_is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT COALESCE((auth.jwt() -> 'app_metadata' ->> 'role') = 'ADMIN', false);
$$;

CREATE OR REPLACE FUNCTION public.can_access_cyber(target_cyber_id text)
RETURNS boolean
LANGUAGE sql
STABLE
AS $$
  SELECT public.staff_is_admin()
    OR target_cyber_id = ANY(public.staff_cyber_ids());
$$;

-- SessionOrdinateur: staff read assigned cybers
CREATE POLICY "staff_select_sessions"
  ON "SessionOrdinateur"
  FOR SELECT
  TO authenticated
  USING (public.can_access_cyber("cyberId"));

-- Ticket: staff read assigned cybers
CREATE POLICY "staff_select_tickets"
  ON "Ticket"
  FOR SELECT
  TO authenticated
  USING (public.can_access_cyber("cyberId"));

-- PostePresence: staff read assigned cybers
CREATE POLICY "staff_select_presence"
  ON "PostePresence"
  FOR SELECT
  TO authenticated
  USING (public.can_access_cyber("cyberId"));

-- TransactionCaisse: staff read only (INSERT via Prisma service role / Server Actions)
CREATE POLICY "staff_select_transactions"
  ON "TransactionCaisse"
  FOR SELECT
  TO authenticated
  USING (public.can_access_cyber("cyberId"));

-- Cyber: staff read for switcher
ALTER TABLE "Cyber" ENABLE ROW LEVEL SECURITY;

CREATE POLICY "staff_select_cybers"
  ON "Cyber"
  FOR SELECT
  TO authenticated
  USING (
    public.staff_is_admin()
    OR "id" = ANY(public.staff_cyber_ids())
  );
