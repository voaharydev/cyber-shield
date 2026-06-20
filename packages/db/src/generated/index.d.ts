
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Cyber
 * 
 */
export type Cyber = $Result.DefaultSelection<Prisma.$CyberPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model UserCyber
 * 
 */
export type UserCyber = $Result.DefaultSelection<Prisma.$UserCyberPayload>
/**
 * Model FideliteConfig
 * 
 */
export type FideliteConfig = $Result.DefaultSelection<Prisma.$FideliteConfigPayload>
/**
 * Model ClientFidelite
 * 
 */
export type ClientFidelite = $Result.DefaultSelection<Prisma.$ClientFidelitePayload>
/**
 * Model MouvementFidelite
 * 
 */
export type MouvementFidelite = $Result.DefaultSelection<Prisma.$MouvementFidelitePayload>
/**
 * Model Ticket
 * 
 */
export type Ticket = $Result.DefaultSelection<Prisma.$TicketPayload>
/**
 * Model SessionOrdinateur
 * 
 */
export type SessionOrdinateur = $Result.DefaultSelection<Prisma.$SessionOrdinateurPayload>
/**
 * Model PostePresence
 * 
 */
export type PostePresence = $Result.DefaultSelection<Prisma.$PostePresencePayload>
/**
 * Model TransactionCaisse
 * 
 */
export type TransactionCaisse = $Result.DefaultSelection<Prisma.$TransactionCaissePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  STAFF: 'STAFF'
};

export type Role = (typeof Role)[keyof typeof Role]


export const StatutTicket: {
  VALIDE: 'VALIDE',
  ACTIVE: 'ACTIVE',
  EXPIRE: 'EXPIRE'
};

export type StatutTicket = (typeof StatutTicket)[keyof typeof StatutTicket]


export const StatutPoste: {
  VERROUILLE: 'VERROUILLE',
  EN_COURS: 'EN_COURS',
  A_PAYER: 'A_PAYER'
};

export type StatutPoste = (typeof StatutPoste)[keyof typeof StatutPoste]


export const TypeSession: {
  PREPAID: 'PREPAID',
  POSTPAID: 'POSTPAID'
};

export type TypeSession = (typeof TypeSession)[keyof typeof TypeSession]


export const TypePaiement: {
  ESPECES: 'ESPECES',
  MOBILE_MONEY: 'MOBILE_MONEY',
  CARTE: 'CARTE'
};

export type TypePaiement = (typeof TypePaiement)[keyof typeof TypePaiement]


export const TypeMouvementFidelite: {
  GAIN_ACHAT: 'GAIN_ACHAT',
  ECHANGE_MINUTES: 'ECHANGE_MINUTES',
  ECHANGE_REDUCTION: 'ECHANGE_REDUCTION'
};

export type TypeMouvementFidelite = (typeof TypeMouvementFidelite)[keyof typeof TypeMouvementFidelite]


export const SourceMiseAJour: {
  LOCAL: 'LOCAL',
  CLOUD: 'CLOUD'
};

export type SourceMiseAJour = (typeof SourceMiseAJour)[keyof typeof SourceMiseAJour]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type StatutTicket = $Enums.StatutTicket

export const StatutTicket: typeof $Enums.StatutTicket

export type StatutPoste = $Enums.StatutPoste

export const StatutPoste: typeof $Enums.StatutPoste

export type TypeSession = $Enums.TypeSession

export const TypeSession: typeof $Enums.TypeSession

export type TypePaiement = $Enums.TypePaiement

export const TypePaiement: typeof $Enums.TypePaiement

export type TypeMouvementFidelite = $Enums.TypeMouvementFidelite

export const TypeMouvementFidelite: typeof $Enums.TypeMouvementFidelite

export type SourceMiseAJour = $Enums.SourceMiseAJour

export const SourceMiseAJour: typeof $Enums.SourceMiseAJour

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Cybers
 * const cybers = await prisma.cyber.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Cybers
   * const cybers = await prisma.cyber.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.cyber`: Exposes CRUD operations for the **Cyber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cybers
    * const cybers = await prisma.cyber.findMany()
    * ```
    */
  get cyber(): Prisma.CyberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userCyber`: Exposes CRUD operations for the **UserCyber** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserCybers
    * const userCybers = await prisma.userCyber.findMany()
    * ```
    */
  get userCyber(): Prisma.UserCyberDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.fideliteConfig`: Exposes CRUD operations for the **FideliteConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FideliteConfigs
    * const fideliteConfigs = await prisma.fideliteConfig.findMany()
    * ```
    */
  get fideliteConfig(): Prisma.FideliteConfigDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientFidelite`: Exposes CRUD operations for the **ClientFidelite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientFidelites
    * const clientFidelites = await prisma.clientFidelite.findMany()
    * ```
    */
  get clientFidelite(): Prisma.ClientFideliteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.mouvementFidelite`: Exposes CRUD operations for the **MouvementFidelite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MouvementFidelites
    * const mouvementFidelites = await prisma.mouvementFidelite.findMany()
    * ```
    */
  get mouvementFidelite(): Prisma.MouvementFideliteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ticket`: Exposes CRUD operations for the **Ticket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tickets
    * const tickets = await prisma.ticket.findMany()
    * ```
    */
  get ticket(): Prisma.TicketDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sessionOrdinateur`: Exposes CRUD operations for the **SessionOrdinateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SessionOrdinateurs
    * const sessionOrdinateurs = await prisma.sessionOrdinateur.findMany()
    * ```
    */
  get sessionOrdinateur(): Prisma.SessionOrdinateurDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.postePresence`: Exposes CRUD operations for the **PostePresence** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostePresences
    * const postePresences = await prisma.postePresence.findMany()
    * ```
    */
  get postePresence(): Prisma.PostePresenceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.transactionCaisse`: Exposes CRUD operations for the **TransactionCaisse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TransactionCaisses
    * const transactionCaisses = await prisma.transactionCaisse.findMany()
    * ```
    */
  get transactionCaisse(): Prisma.TransactionCaisseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Cyber: 'Cyber',
    User: 'User',
    UserCyber: 'UserCyber',
    FideliteConfig: 'FideliteConfig',
    ClientFidelite: 'ClientFidelite',
    MouvementFidelite: 'MouvementFidelite',
    Ticket: 'Ticket',
    SessionOrdinateur: 'SessionOrdinateur',
    PostePresence: 'PostePresence',
    TransactionCaisse: 'TransactionCaisse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "cyber" | "user" | "userCyber" | "fideliteConfig" | "clientFidelite" | "mouvementFidelite" | "ticket" | "sessionOrdinateur" | "postePresence" | "transactionCaisse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Cyber: {
        payload: Prisma.$CyberPayload<ExtArgs>
        fields: Prisma.CyberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CyberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CyberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          findFirst: {
            args: Prisma.CyberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CyberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          findMany: {
            args: Prisma.CyberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>[]
          }
          create: {
            args: Prisma.CyberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          createMany: {
            args: Prisma.CyberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CyberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>[]
          }
          delete: {
            args: Prisma.CyberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          update: {
            args: Prisma.CyberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          deleteMany: {
            args: Prisma.CyberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CyberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CyberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>[]
          }
          upsert: {
            args: Prisma.CyberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CyberPayload>
          }
          aggregate: {
            args: Prisma.CyberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCyber>
          }
          groupBy: {
            args: Prisma.CyberGroupByArgs<ExtArgs>
            result: $Utils.Optional<CyberGroupByOutputType>[]
          }
          count: {
            args: Prisma.CyberCountArgs<ExtArgs>
            result: $Utils.Optional<CyberCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      UserCyber: {
        payload: Prisma.$UserCyberPayload<ExtArgs>
        fields: Prisma.UserCyberFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserCyberFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserCyberFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          findFirst: {
            args: Prisma.UserCyberFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserCyberFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          findMany: {
            args: Prisma.UserCyberFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>[]
          }
          create: {
            args: Prisma.UserCyberCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          createMany: {
            args: Prisma.UserCyberCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCyberCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>[]
          }
          delete: {
            args: Prisma.UserCyberDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          update: {
            args: Prisma.UserCyberUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          deleteMany: {
            args: Prisma.UserCyberDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserCyberUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserCyberUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>[]
          }
          upsert: {
            args: Prisma.UserCyberUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserCyberPayload>
          }
          aggregate: {
            args: Prisma.UserCyberAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserCyber>
          }
          groupBy: {
            args: Prisma.UserCyberGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserCyberGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCyberCountArgs<ExtArgs>
            result: $Utils.Optional<UserCyberCountAggregateOutputType> | number
          }
        }
      }
      FideliteConfig: {
        payload: Prisma.$FideliteConfigPayload<ExtArgs>
        fields: Prisma.FideliteConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FideliteConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FideliteConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          findFirst: {
            args: Prisma.FideliteConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FideliteConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          findMany: {
            args: Prisma.FideliteConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>[]
          }
          create: {
            args: Prisma.FideliteConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          createMany: {
            args: Prisma.FideliteConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FideliteConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>[]
          }
          delete: {
            args: Prisma.FideliteConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          update: {
            args: Prisma.FideliteConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          deleteMany: {
            args: Prisma.FideliteConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FideliteConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FideliteConfigUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>[]
          }
          upsert: {
            args: Prisma.FideliteConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FideliteConfigPayload>
          }
          aggregate: {
            args: Prisma.FideliteConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFideliteConfig>
          }
          groupBy: {
            args: Prisma.FideliteConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<FideliteConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.FideliteConfigCountArgs<ExtArgs>
            result: $Utils.Optional<FideliteConfigCountAggregateOutputType> | number
          }
        }
      }
      ClientFidelite: {
        payload: Prisma.$ClientFidelitePayload<ExtArgs>
        fields: Prisma.ClientFideliteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFideliteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFideliteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          findFirst: {
            args: Prisma.ClientFideliteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFideliteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          findMany: {
            args: Prisma.ClientFideliteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>[]
          }
          create: {
            args: Prisma.ClientFideliteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          createMany: {
            args: Prisma.ClientFideliteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientFideliteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>[]
          }
          delete: {
            args: Prisma.ClientFideliteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          update: {
            args: Prisma.ClientFideliteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          deleteMany: {
            args: Prisma.ClientFideliteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientFideliteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientFideliteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>[]
          }
          upsert: {
            args: Prisma.ClientFideliteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientFidelitePayload>
          }
          aggregate: {
            args: Prisma.ClientFideliteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientFidelite>
          }
          groupBy: {
            args: Prisma.ClientFideliteGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientFideliteGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientFideliteCountArgs<ExtArgs>
            result: $Utils.Optional<ClientFideliteCountAggregateOutputType> | number
          }
        }
      }
      MouvementFidelite: {
        payload: Prisma.$MouvementFidelitePayload<ExtArgs>
        fields: Prisma.MouvementFideliteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MouvementFideliteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MouvementFideliteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          findFirst: {
            args: Prisma.MouvementFideliteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MouvementFideliteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          findMany: {
            args: Prisma.MouvementFideliteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>[]
          }
          create: {
            args: Prisma.MouvementFideliteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          createMany: {
            args: Prisma.MouvementFideliteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MouvementFideliteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>[]
          }
          delete: {
            args: Prisma.MouvementFideliteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          update: {
            args: Prisma.MouvementFideliteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          deleteMany: {
            args: Prisma.MouvementFideliteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MouvementFideliteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MouvementFideliteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>[]
          }
          upsert: {
            args: Prisma.MouvementFideliteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MouvementFidelitePayload>
          }
          aggregate: {
            args: Prisma.MouvementFideliteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMouvementFidelite>
          }
          groupBy: {
            args: Prisma.MouvementFideliteGroupByArgs<ExtArgs>
            result: $Utils.Optional<MouvementFideliteGroupByOutputType>[]
          }
          count: {
            args: Prisma.MouvementFideliteCountArgs<ExtArgs>
            result: $Utils.Optional<MouvementFideliteCountAggregateOutputType> | number
          }
        }
      }
      Ticket: {
        payload: Prisma.$TicketPayload<ExtArgs>
        fields: Prisma.TicketFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TicketFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TicketFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findFirst: {
            args: Prisma.TicketFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TicketFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          findMany: {
            args: Prisma.TicketFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          create: {
            args: Prisma.TicketCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          createMany: {
            args: Prisma.TicketCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TicketCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          delete: {
            args: Prisma.TicketDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          update: {
            args: Prisma.TicketUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          deleteMany: {
            args: Prisma.TicketDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TicketUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TicketUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>[]
          }
          upsert: {
            args: Prisma.TicketUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TicketPayload>
          }
          aggregate: {
            args: Prisma.TicketAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTicket>
          }
          groupBy: {
            args: Prisma.TicketGroupByArgs<ExtArgs>
            result: $Utils.Optional<TicketGroupByOutputType>[]
          }
          count: {
            args: Prisma.TicketCountArgs<ExtArgs>
            result: $Utils.Optional<TicketCountAggregateOutputType> | number
          }
        }
      }
      SessionOrdinateur: {
        payload: Prisma.$SessionOrdinateurPayload<ExtArgs>
        fields: Prisma.SessionOrdinateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionOrdinateurFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionOrdinateurFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          findFirst: {
            args: Prisma.SessionOrdinateurFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionOrdinateurFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          findMany: {
            args: Prisma.SessionOrdinateurFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>[]
          }
          create: {
            args: Prisma.SessionOrdinateurCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          createMany: {
            args: Prisma.SessionOrdinateurCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionOrdinateurCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>[]
          }
          delete: {
            args: Prisma.SessionOrdinateurDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          update: {
            args: Prisma.SessionOrdinateurUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          deleteMany: {
            args: Prisma.SessionOrdinateurDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionOrdinateurUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionOrdinateurUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>[]
          }
          upsert: {
            args: Prisma.SessionOrdinateurUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionOrdinateurPayload>
          }
          aggregate: {
            args: Prisma.SessionOrdinateurAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSessionOrdinateur>
          }
          groupBy: {
            args: Prisma.SessionOrdinateurGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionOrdinateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionOrdinateurCountArgs<ExtArgs>
            result: $Utils.Optional<SessionOrdinateurCountAggregateOutputType> | number
          }
        }
      }
      PostePresence: {
        payload: Prisma.$PostePresencePayload<ExtArgs>
        fields: Prisma.PostePresenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostePresenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostePresenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          findFirst: {
            args: Prisma.PostePresenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostePresenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          findMany: {
            args: Prisma.PostePresenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>[]
          }
          create: {
            args: Prisma.PostePresenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          createMany: {
            args: Prisma.PostePresenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostePresenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>[]
          }
          delete: {
            args: Prisma.PostePresenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          update: {
            args: Prisma.PostePresenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          deleteMany: {
            args: Prisma.PostePresenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostePresenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostePresenceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>[]
          }
          upsert: {
            args: Prisma.PostePresenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostePresencePayload>
          }
          aggregate: {
            args: Prisma.PostePresenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostePresence>
          }
          groupBy: {
            args: Prisma.PostePresenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostePresenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostePresenceCountArgs<ExtArgs>
            result: $Utils.Optional<PostePresenceCountAggregateOutputType> | number
          }
        }
      }
      TransactionCaisse: {
        payload: Prisma.$TransactionCaissePayload<ExtArgs>
        fields: Prisma.TransactionCaisseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TransactionCaisseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TransactionCaisseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          findFirst: {
            args: Prisma.TransactionCaisseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TransactionCaisseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          findMany: {
            args: Prisma.TransactionCaisseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>[]
          }
          create: {
            args: Prisma.TransactionCaisseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          createMany: {
            args: Prisma.TransactionCaisseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TransactionCaisseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>[]
          }
          delete: {
            args: Prisma.TransactionCaisseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          update: {
            args: Prisma.TransactionCaisseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          deleteMany: {
            args: Prisma.TransactionCaisseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TransactionCaisseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TransactionCaisseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>[]
          }
          upsert: {
            args: Prisma.TransactionCaisseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TransactionCaissePayload>
          }
          aggregate: {
            args: Prisma.TransactionCaisseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTransactionCaisse>
          }
          groupBy: {
            args: Prisma.TransactionCaisseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TransactionCaisseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TransactionCaisseCountArgs<ExtArgs>
            result: $Utils.Optional<TransactionCaisseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    cyber?: CyberOmit
    user?: UserOmit
    userCyber?: UserCyberOmit
    fideliteConfig?: FideliteConfigOmit
    clientFidelite?: ClientFideliteOmit
    mouvementFidelite?: MouvementFideliteOmit
    ticket?: TicketOmit
    sessionOrdinateur?: SessionOrdinateurOmit
    postePresence?: PostePresenceOmit
    transactionCaisse?: TransactionCaisseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type CyberCountOutputType
   */

  export type CyberCountOutputType = {
    staffAssignments: number
    tickets: number
    sessions: number
    postePresences: number
    transactions: number
    mouvementsFidelite: number
  }

  export type CyberCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffAssignments?: boolean | CyberCountOutputTypeCountStaffAssignmentsArgs
    tickets?: boolean | CyberCountOutputTypeCountTicketsArgs
    sessions?: boolean | CyberCountOutputTypeCountSessionsArgs
    postePresences?: boolean | CyberCountOutputTypeCountPostePresencesArgs
    transactions?: boolean | CyberCountOutputTypeCountTransactionsArgs
    mouvementsFidelite?: boolean | CyberCountOutputTypeCountMouvementsFideliteArgs
  }

  // Custom InputTypes
  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CyberCountOutputType
     */
    select?: CyberCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountStaffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCyberWhereInput
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionOrdinateurWhereInput
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountPostePresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostePresenceWhereInput
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionCaisseWhereInput
  }

  /**
   * CyberCountOutputType without action
   */
  export type CyberCountOutputTypeCountMouvementsFideliteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementFideliteWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    cybers: number
    ticketsCrees: number
    transactionsCaisse: number
    mouvementsFidelite: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cybers?: boolean | UserCountOutputTypeCountCybersArgs
    ticketsCrees?: boolean | UserCountOutputTypeCountTicketsCreesArgs
    transactionsCaisse?: boolean | UserCountOutputTypeCountTransactionsCaisseArgs
    mouvementsFidelite?: boolean | UserCountOutputTypeCountMouvementsFideliteArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCybersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCyberWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTicketsCreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTransactionsCaisseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionCaisseWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMouvementsFideliteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementFideliteWhereInput
  }


  /**
   * Count Type ClientFideliteCountOutputType
   */

  export type ClientFideliteCountOutputType = {
    tickets: number
    mouvements: number
  }

  export type ClientFideliteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ClientFideliteCountOutputTypeCountTicketsArgs
    mouvements?: boolean | ClientFideliteCountOutputTypeCountMouvementsArgs
  }

  // Custom InputTypes
  /**
   * ClientFideliteCountOutputType without action
   */
  export type ClientFideliteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFideliteCountOutputType
     */
    select?: ClientFideliteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientFideliteCountOutputType without action
   */
  export type ClientFideliteCountOutputTypeCountTicketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
  }

  /**
   * ClientFideliteCountOutputType without action
   */
  export type ClientFideliteCountOutputTypeCountMouvementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementFideliteWhereInput
  }


  /**
   * Count Type TicketCountOutputType
   */

  export type TicketCountOutputType = {
    sessions: number
    mouvements: number
  }

  export type TicketCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | TicketCountOutputTypeCountSessionsArgs
    mouvements?: boolean | TicketCountOutputTypeCountMouvementsArgs
  }

  // Custom InputTypes
  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TicketCountOutputType
     */
    select?: TicketCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionOrdinateurWhereInput
  }

  /**
   * TicketCountOutputType without action
   */
  export type TicketCountOutputTypeCountMouvementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementFideliteWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Cyber
   */

  export type AggregateCyber = {
    _count: CyberCountAggregateOutputType | null
    _avg: CyberAvgAggregateOutputType | null
    _sum: CyberSumAggregateOutputType | null
    _min: CyberMinAggregateOutputType | null
    _max: CyberMaxAggregateOutputType | null
  }

  export type CyberAvgAggregateOutputType = {
    nombrePostes: number | null
    dureesTicket: number | null
    prixParMinute: Decimal | null
  }

  export type CyberSumAggregateOutputType = {
    nombrePostes: number | null
    dureesTicket: number[]
    prixParMinute: Decimal | null
  }

  export type CyberMinAggregateOutputType = {
    id: string | null
    nom: string | null
    nombrePostes: number | null
    prixParMinute: Decimal | null
    isActive: boolean | null
    archivedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CyberMaxAggregateOutputType = {
    id: string | null
    nom: string | null
    nombrePostes: number | null
    prixParMinute: Decimal | null
    isActive: boolean | null
    archivedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CyberCountAggregateOutputType = {
    id: number
    nom: number
    nombrePostes: number
    dureesTicket: number
    prixParMinute: number
    isActive: number
    archivedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CyberAvgAggregateInputType = {
    nombrePostes?: true
    dureesTicket?: true
    prixParMinute?: true
  }

  export type CyberSumAggregateInputType = {
    nombrePostes?: true
    dureesTicket?: true
    prixParMinute?: true
  }

  export type CyberMinAggregateInputType = {
    id?: true
    nom?: true
    nombrePostes?: true
    prixParMinute?: true
    isActive?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CyberMaxAggregateInputType = {
    id?: true
    nom?: true
    nombrePostes?: true
    prixParMinute?: true
    isActive?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CyberCountAggregateInputType = {
    id?: true
    nom?: true
    nombrePostes?: true
    dureesTicket?: true
    prixParMinute?: true
    isActive?: true
    archivedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CyberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cyber to aggregate.
     */
    where?: CyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cybers to fetch.
     */
    orderBy?: CyberOrderByWithRelationInput | CyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cybers
    **/
    _count?: true | CyberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CyberAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CyberSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CyberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CyberMaxAggregateInputType
  }

  export type GetCyberAggregateType<T extends CyberAggregateArgs> = {
        [P in keyof T & keyof AggregateCyber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCyber[P]>
      : GetScalarType<T[P], AggregateCyber[P]>
  }




  export type CyberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CyberWhereInput
    orderBy?: CyberOrderByWithAggregationInput | CyberOrderByWithAggregationInput[]
    by: CyberScalarFieldEnum[] | CyberScalarFieldEnum
    having?: CyberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CyberCountAggregateInputType | true
    _avg?: CyberAvgAggregateInputType
    _sum?: CyberSumAggregateInputType
    _min?: CyberMinAggregateInputType
    _max?: CyberMaxAggregateInputType
  }

  export type CyberGroupByOutputType = {
    id: string
    nom: string
    nombrePostes: number
    dureesTicket: number[]
    prixParMinute: Decimal
    isActive: boolean
    archivedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: CyberCountAggregateOutputType | null
    _avg: CyberAvgAggregateOutputType | null
    _sum: CyberSumAggregateOutputType | null
    _min: CyberMinAggregateOutputType | null
    _max: CyberMaxAggregateOutputType | null
  }

  type GetCyberGroupByPayload<T extends CyberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CyberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CyberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CyberGroupByOutputType[P]>
            : GetScalarType<T[P], CyberGroupByOutputType[P]>
        }
      >
    >


  export type CyberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nombrePostes?: boolean
    dureesTicket?: boolean
    prixParMinute?: boolean
    isActive?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    staffAssignments?: boolean | Cyber$staffAssignmentsArgs<ExtArgs>
    tickets?: boolean | Cyber$ticketsArgs<ExtArgs>
    sessions?: boolean | Cyber$sessionsArgs<ExtArgs>
    postePresences?: boolean | Cyber$postePresencesArgs<ExtArgs>
    transactions?: boolean | Cyber$transactionsArgs<ExtArgs>
    mouvementsFidelite?: boolean | Cyber$mouvementsFideliteArgs<ExtArgs>
    _count?: boolean | CyberCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cyber"]>

  export type CyberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nombrePostes?: boolean
    dureesTicket?: boolean
    prixParMinute?: boolean
    isActive?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cyber"]>

  export type CyberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nom?: boolean
    nombrePostes?: boolean
    dureesTicket?: boolean
    prixParMinute?: boolean
    isActive?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["cyber"]>

  export type CyberSelectScalar = {
    id?: boolean
    nom?: boolean
    nombrePostes?: boolean
    dureesTicket?: boolean
    prixParMinute?: boolean
    isActive?: boolean
    archivedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CyberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nom" | "nombrePostes" | "dureesTicket" | "prixParMinute" | "isActive" | "archivedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["cyber"]>
  export type CyberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    staffAssignments?: boolean | Cyber$staffAssignmentsArgs<ExtArgs>
    tickets?: boolean | Cyber$ticketsArgs<ExtArgs>
    sessions?: boolean | Cyber$sessionsArgs<ExtArgs>
    postePresences?: boolean | Cyber$postePresencesArgs<ExtArgs>
    transactions?: boolean | Cyber$transactionsArgs<ExtArgs>
    mouvementsFidelite?: boolean | Cyber$mouvementsFideliteArgs<ExtArgs>
    _count?: boolean | CyberCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CyberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CyberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CyberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cyber"
    objects: {
      staffAssignments: Prisma.$UserCyberPayload<ExtArgs>[]
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      sessions: Prisma.$SessionOrdinateurPayload<ExtArgs>[]
      postePresences: Prisma.$PostePresencePayload<ExtArgs>[]
      transactions: Prisma.$TransactionCaissePayload<ExtArgs>[]
      mouvementsFidelite: Prisma.$MouvementFidelitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      nom: string
      nombrePostes: number
      dureesTicket: number[]
      prixParMinute: Prisma.Decimal
      isActive: boolean
      archivedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["cyber"]>
    composites: {}
  }

  type CyberGetPayload<S extends boolean | null | undefined | CyberDefaultArgs> = $Result.GetResult<Prisma.$CyberPayload, S>

  type CyberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CyberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CyberCountAggregateInputType | true
    }

  export interface CyberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cyber'], meta: { name: 'Cyber' } }
    /**
     * Find zero or one Cyber that matches the filter.
     * @param {CyberFindUniqueArgs} args - Arguments to find a Cyber
     * @example
     * // Get one Cyber
     * const cyber = await prisma.cyber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CyberFindUniqueArgs>(args: SelectSubset<T, CyberFindUniqueArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cyber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CyberFindUniqueOrThrowArgs} args - Arguments to find a Cyber
     * @example
     * // Get one Cyber
     * const cyber = await prisma.cyber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CyberFindUniqueOrThrowArgs>(args: SelectSubset<T, CyberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cyber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberFindFirstArgs} args - Arguments to find a Cyber
     * @example
     * // Get one Cyber
     * const cyber = await prisma.cyber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CyberFindFirstArgs>(args?: SelectSubset<T, CyberFindFirstArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cyber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberFindFirstOrThrowArgs} args - Arguments to find a Cyber
     * @example
     * // Get one Cyber
     * const cyber = await prisma.cyber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CyberFindFirstOrThrowArgs>(args?: SelectSubset<T, CyberFindFirstOrThrowArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cybers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cybers
     * const cybers = await prisma.cyber.findMany()
     * 
     * // Get first 10 Cybers
     * const cybers = await prisma.cyber.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cyberWithIdOnly = await prisma.cyber.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CyberFindManyArgs>(args?: SelectSubset<T, CyberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cyber.
     * @param {CyberCreateArgs} args - Arguments to create a Cyber.
     * @example
     * // Create one Cyber
     * const Cyber = await prisma.cyber.create({
     *   data: {
     *     // ... data to create a Cyber
     *   }
     * })
     * 
     */
    create<T extends CyberCreateArgs>(args: SelectSubset<T, CyberCreateArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cybers.
     * @param {CyberCreateManyArgs} args - Arguments to create many Cybers.
     * @example
     * // Create many Cybers
     * const cyber = await prisma.cyber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CyberCreateManyArgs>(args?: SelectSubset<T, CyberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cybers and returns the data saved in the database.
     * @param {CyberCreateManyAndReturnArgs} args - Arguments to create many Cybers.
     * @example
     * // Create many Cybers
     * const cyber = await prisma.cyber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cybers and only return the `id`
     * const cyberWithIdOnly = await prisma.cyber.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CyberCreateManyAndReturnArgs>(args?: SelectSubset<T, CyberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cyber.
     * @param {CyberDeleteArgs} args - Arguments to delete one Cyber.
     * @example
     * // Delete one Cyber
     * const Cyber = await prisma.cyber.delete({
     *   where: {
     *     // ... filter to delete one Cyber
     *   }
     * })
     * 
     */
    delete<T extends CyberDeleteArgs>(args: SelectSubset<T, CyberDeleteArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cyber.
     * @param {CyberUpdateArgs} args - Arguments to update one Cyber.
     * @example
     * // Update one Cyber
     * const cyber = await prisma.cyber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CyberUpdateArgs>(args: SelectSubset<T, CyberUpdateArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cybers.
     * @param {CyberDeleteManyArgs} args - Arguments to filter Cybers to delete.
     * @example
     * // Delete a few Cybers
     * const { count } = await prisma.cyber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CyberDeleteManyArgs>(args?: SelectSubset<T, CyberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cybers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cybers
     * const cyber = await prisma.cyber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CyberUpdateManyArgs>(args: SelectSubset<T, CyberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cybers and returns the data updated in the database.
     * @param {CyberUpdateManyAndReturnArgs} args - Arguments to update many Cybers.
     * @example
     * // Update many Cybers
     * const cyber = await prisma.cyber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cybers and only return the `id`
     * const cyberWithIdOnly = await prisma.cyber.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CyberUpdateManyAndReturnArgs>(args: SelectSubset<T, CyberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cyber.
     * @param {CyberUpsertArgs} args - Arguments to update or create a Cyber.
     * @example
     * // Update or create a Cyber
     * const cyber = await prisma.cyber.upsert({
     *   create: {
     *     // ... data to create a Cyber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cyber we want to update
     *   }
     * })
     */
    upsert<T extends CyberUpsertArgs>(args: SelectSubset<T, CyberUpsertArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cybers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberCountArgs} args - Arguments to filter Cybers to count.
     * @example
     * // Count the number of Cybers
     * const count = await prisma.cyber.count({
     *   where: {
     *     // ... the filter for the Cybers we want to count
     *   }
     * })
    **/
    count<T extends CyberCountArgs>(
      args?: Subset<T, CyberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CyberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cyber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CyberAggregateArgs>(args: Subset<T, CyberAggregateArgs>): Prisma.PrismaPromise<GetCyberAggregateType<T>>

    /**
     * Group by Cyber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CyberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CyberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CyberGroupByArgs['orderBy'] }
        : { orderBy?: CyberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CyberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCyberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cyber model
   */
  readonly fields: CyberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cyber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CyberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    staffAssignments<T extends Cyber$staffAssignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$staffAssignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    tickets<T extends Cyber$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends Cyber$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    postePresences<T extends Cyber$postePresencesArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$postePresencesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactions<T extends Cyber$transactionsArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$transactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mouvementsFidelite<T extends Cyber$mouvementsFideliteArgs<ExtArgs> = {}>(args?: Subset<T, Cyber$mouvementsFideliteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Cyber model
   */
  interface CyberFieldRefs {
    readonly id: FieldRef<"Cyber", 'String'>
    readonly nom: FieldRef<"Cyber", 'String'>
    readonly nombrePostes: FieldRef<"Cyber", 'Int'>
    readonly dureesTicket: FieldRef<"Cyber", 'Int[]'>
    readonly prixParMinute: FieldRef<"Cyber", 'Decimal'>
    readonly isActive: FieldRef<"Cyber", 'Boolean'>
    readonly archivedAt: FieldRef<"Cyber", 'DateTime'>
    readonly createdAt: FieldRef<"Cyber", 'DateTime'>
    readonly updatedAt: FieldRef<"Cyber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Cyber findUnique
   */
  export type CyberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter, which Cyber to fetch.
     */
    where: CyberWhereUniqueInput
  }

  /**
   * Cyber findUniqueOrThrow
   */
  export type CyberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter, which Cyber to fetch.
     */
    where: CyberWhereUniqueInput
  }

  /**
   * Cyber findFirst
   */
  export type CyberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter, which Cyber to fetch.
     */
    where?: CyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cybers to fetch.
     */
    orderBy?: CyberOrderByWithRelationInput | CyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cybers.
     */
    cursor?: CyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cybers.
     */
    distinct?: CyberScalarFieldEnum | CyberScalarFieldEnum[]
  }

  /**
   * Cyber findFirstOrThrow
   */
  export type CyberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter, which Cyber to fetch.
     */
    where?: CyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cybers to fetch.
     */
    orderBy?: CyberOrderByWithRelationInput | CyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cybers.
     */
    cursor?: CyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cybers.
     */
    distinct?: CyberScalarFieldEnum | CyberScalarFieldEnum[]
  }

  /**
   * Cyber findMany
   */
  export type CyberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter, which Cybers to fetch.
     */
    where?: CyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cybers to fetch.
     */
    orderBy?: CyberOrderByWithRelationInput | CyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cybers.
     */
    cursor?: CyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cybers.
     */
    skip?: number
    distinct?: CyberScalarFieldEnum | CyberScalarFieldEnum[]
  }

  /**
   * Cyber create
   */
  export type CyberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * The data needed to create a Cyber.
     */
    data: XOR<CyberCreateInput, CyberUncheckedCreateInput>
  }

  /**
   * Cyber createMany
   */
  export type CyberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cybers.
     */
    data: CyberCreateManyInput | CyberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cyber createManyAndReturn
   */
  export type CyberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * The data used to create many Cybers.
     */
    data: CyberCreateManyInput | CyberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Cyber update
   */
  export type CyberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * The data needed to update a Cyber.
     */
    data: XOR<CyberUpdateInput, CyberUncheckedUpdateInput>
    /**
     * Choose, which Cyber to update.
     */
    where: CyberWhereUniqueInput
  }

  /**
   * Cyber updateMany
   */
  export type CyberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cybers.
     */
    data: XOR<CyberUpdateManyMutationInput, CyberUncheckedUpdateManyInput>
    /**
     * Filter which Cybers to update
     */
    where?: CyberWhereInput
    /**
     * Limit how many Cybers to update.
     */
    limit?: number
  }

  /**
   * Cyber updateManyAndReturn
   */
  export type CyberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * The data used to update Cybers.
     */
    data: XOR<CyberUpdateManyMutationInput, CyberUncheckedUpdateManyInput>
    /**
     * Filter which Cybers to update
     */
    where?: CyberWhereInput
    /**
     * Limit how many Cybers to update.
     */
    limit?: number
  }

  /**
   * Cyber upsert
   */
  export type CyberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * The filter to search for the Cyber to update in case it exists.
     */
    where: CyberWhereUniqueInput
    /**
     * In case the Cyber found by the `where` argument doesn't exist, create a new Cyber with this data.
     */
    create: XOR<CyberCreateInput, CyberUncheckedCreateInput>
    /**
     * In case the Cyber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CyberUpdateInput, CyberUncheckedUpdateInput>
  }

  /**
   * Cyber delete
   */
  export type CyberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
    /**
     * Filter which Cyber to delete.
     */
    where: CyberWhereUniqueInput
  }

  /**
   * Cyber deleteMany
   */
  export type CyberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cybers to delete
     */
    where?: CyberWhereInput
    /**
     * Limit how many Cybers to delete.
     */
    limit?: number
  }

  /**
   * Cyber.staffAssignments
   */
  export type Cyber$staffAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    where?: UserCyberWhereInput
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    cursor?: UserCyberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCyberScalarFieldEnum | UserCyberScalarFieldEnum[]
  }

  /**
   * Cyber.tickets
   */
  export type Cyber$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Cyber.sessions
   */
  export type Cyber$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    where?: SessionOrdinateurWhereInput
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    cursor?: SessionOrdinateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionOrdinateurScalarFieldEnum | SessionOrdinateurScalarFieldEnum[]
  }

  /**
   * Cyber.postePresences
   */
  export type Cyber$postePresencesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    where?: PostePresenceWhereInput
    orderBy?: PostePresenceOrderByWithRelationInput | PostePresenceOrderByWithRelationInput[]
    cursor?: PostePresenceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostePresenceScalarFieldEnum | PostePresenceScalarFieldEnum[]
  }

  /**
   * Cyber.transactions
   */
  export type Cyber$transactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    where?: TransactionCaisseWhereInput
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    cursor?: TransactionCaisseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionCaisseScalarFieldEnum | TransactionCaisseScalarFieldEnum[]
  }

  /**
   * Cyber.mouvementsFidelite
   */
  export type Cyber$mouvementsFideliteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    where?: MouvementFideliteWhereInput
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    cursor?: MouvementFideliteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * Cyber without action
   */
  export type CyberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cyber
     */
    select?: CyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Cyber
     */
    omit?: CyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CyberInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    supabaseUserId: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    supabaseUserId: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    supabaseUserId: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    supabaseUserId?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    supabaseUserId?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    supabaseUserId?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string | null
    supabaseUserId: string | null
    passwordHash: string
    role: $Enums.Role
    isActive: boolean
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    supabaseUserId?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    cybers?: boolean | User$cybersArgs<ExtArgs>
    ticketsCrees?: boolean | User$ticketsCreesArgs<ExtArgs>
    transactionsCaisse?: boolean | User$transactionsCaisseArgs<ExtArgs>
    mouvementsFidelite?: boolean | User$mouvementsFideliteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    supabaseUserId?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    supabaseUserId?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    supabaseUserId?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "supabaseUserId" | "passwordHash" | "role" | "isActive" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cybers?: boolean | User$cybersArgs<ExtArgs>
    ticketsCrees?: boolean | User$ticketsCreesArgs<ExtArgs>
    transactionsCaisse?: boolean | User$transactionsCaisseArgs<ExtArgs>
    mouvementsFidelite?: boolean | User$mouvementsFideliteArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      cybers: Prisma.$UserCyberPayload<ExtArgs>[]
      ticketsCrees: Prisma.$TicketPayload<ExtArgs>[]
      transactionsCaisse: Prisma.$TransactionCaissePayload<ExtArgs>[]
      mouvementsFidelite: Prisma.$MouvementFidelitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string | null
      supabaseUserId: string | null
      passwordHash: string
      role: $Enums.Role
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cybers<T extends User$cybersArgs<ExtArgs> = {}>(args?: Subset<T, User$cybersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ticketsCrees<T extends User$ticketsCreesArgs<ExtArgs> = {}>(args?: Subset<T, User$ticketsCreesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    transactionsCaisse<T extends User$transactionsCaisseArgs<ExtArgs> = {}>(args?: Subset<T, User$transactionsCaisseArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mouvementsFidelite<T extends User$mouvementsFideliteArgs<ExtArgs> = {}>(args?: Subset<T, User$mouvementsFideliteArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly supabaseUserId: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.cybers
   */
  export type User$cybersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    where?: UserCyberWhereInput
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    cursor?: UserCyberWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserCyberScalarFieldEnum | UserCyberScalarFieldEnum[]
  }

  /**
   * User.ticketsCrees
   */
  export type User$ticketsCreesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * User.transactionsCaisse
   */
  export type User$transactionsCaisseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    where?: TransactionCaisseWhereInput
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    cursor?: TransactionCaisseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TransactionCaisseScalarFieldEnum | TransactionCaisseScalarFieldEnum[]
  }

  /**
   * User.mouvementsFidelite
   */
  export type User$mouvementsFideliteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    where?: MouvementFideliteWhereInput
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    cursor?: MouvementFideliteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model UserCyber
   */

  export type AggregateUserCyber = {
    _count: UserCyberCountAggregateOutputType | null
    _min: UserCyberMinAggregateOutputType | null
    _max: UserCyberMaxAggregateOutputType | null
  }

  export type UserCyberMinAggregateOutputType = {
    userId: string | null
    cyberId: string | null
    assignedAt: Date | null
  }

  export type UserCyberMaxAggregateOutputType = {
    userId: string | null
    cyberId: string | null
    assignedAt: Date | null
  }

  export type UserCyberCountAggregateOutputType = {
    userId: number
    cyberId: number
    assignedAt: number
    _all: number
  }


  export type UserCyberMinAggregateInputType = {
    userId?: true
    cyberId?: true
    assignedAt?: true
  }

  export type UserCyberMaxAggregateInputType = {
    userId?: true
    cyberId?: true
    assignedAt?: true
  }

  export type UserCyberCountAggregateInputType = {
    userId?: true
    cyberId?: true
    assignedAt?: true
    _all?: true
  }

  export type UserCyberAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCyber to aggregate.
     */
    where?: UserCyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCybers to fetch.
     */
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserCyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserCybers
    **/
    _count?: true | UserCyberCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserCyberMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserCyberMaxAggregateInputType
  }

  export type GetUserCyberAggregateType<T extends UserCyberAggregateArgs> = {
        [P in keyof T & keyof AggregateUserCyber]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserCyber[P]>
      : GetScalarType<T[P], AggregateUserCyber[P]>
  }




  export type UserCyberGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserCyberWhereInput
    orderBy?: UserCyberOrderByWithAggregationInput | UserCyberOrderByWithAggregationInput[]
    by: UserCyberScalarFieldEnum[] | UserCyberScalarFieldEnum
    having?: UserCyberScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCyberCountAggregateInputType | true
    _min?: UserCyberMinAggregateInputType
    _max?: UserCyberMaxAggregateInputType
  }

  export type UserCyberGroupByOutputType = {
    userId: string
    cyberId: string
    assignedAt: Date
    _count: UserCyberCountAggregateOutputType | null
    _min: UserCyberMinAggregateOutputType | null
    _max: UserCyberMaxAggregateOutputType | null
  }

  type GetUserCyberGroupByPayload<T extends UserCyberGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserCyberGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserCyberGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserCyberGroupByOutputType[P]>
            : GetScalarType<T[P], UserCyberGroupByOutputType[P]>
        }
      >
    >


  export type UserCyberSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cyberId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCyber"]>

  export type UserCyberSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cyberId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCyber"]>

  export type UserCyberSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    cyberId?: boolean
    assignedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userCyber"]>

  export type UserCyberSelectScalar = {
    userId?: boolean
    cyberId?: boolean
    assignedAt?: boolean
  }

  export type UserCyberOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "cyberId" | "assignedAt", ExtArgs["result"]["userCyber"]>
  export type UserCyberInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }
  export type UserCyberIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }
  export type UserCyberIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }

  export type $UserCyberPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserCyber"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      cyber: Prisma.$CyberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      cyberId: string
      assignedAt: Date
    }, ExtArgs["result"]["userCyber"]>
    composites: {}
  }

  type UserCyberGetPayload<S extends boolean | null | undefined | UserCyberDefaultArgs> = $Result.GetResult<Prisma.$UserCyberPayload, S>

  type UserCyberCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserCyberFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCyberCountAggregateInputType | true
    }

  export interface UserCyberDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserCyber'], meta: { name: 'UserCyber' } }
    /**
     * Find zero or one UserCyber that matches the filter.
     * @param {UserCyberFindUniqueArgs} args - Arguments to find a UserCyber
     * @example
     * // Get one UserCyber
     * const userCyber = await prisma.userCyber.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserCyberFindUniqueArgs>(args: SelectSubset<T, UserCyberFindUniqueArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserCyber that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserCyberFindUniqueOrThrowArgs} args - Arguments to find a UserCyber
     * @example
     * // Get one UserCyber
     * const userCyber = await prisma.userCyber.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserCyberFindUniqueOrThrowArgs>(args: SelectSubset<T, UserCyberFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCyber that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberFindFirstArgs} args - Arguments to find a UserCyber
     * @example
     * // Get one UserCyber
     * const userCyber = await prisma.userCyber.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserCyberFindFirstArgs>(args?: SelectSubset<T, UserCyberFindFirstArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserCyber that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberFindFirstOrThrowArgs} args - Arguments to find a UserCyber
     * @example
     * // Get one UserCyber
     * const userCyber = await prisma.userCyber.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserCyberFindFirstOrThrowArgs>(args?: SelectSubset<T, UserCyberFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserCybers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserCybers
     * const userCybers = await prisma.userCyber.findMany()
     * 
     * // Get first 10 UserCybers
     * const userCybers = await prisma.userCyber.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const userCyberWithUserIdOnly = await prisma.userCyber.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends UserCyberFindManyArgs>(args?: SelectSubset<T, UserCyberFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserCyber.
     * @param {UserCyberCreateArgs} args - Arguments to create a UserCyber.
     * @example
     * // Create one UserCyber
     * const UserCyber = await prisma.userCyber.create({
     *   data: {
     *     // ... data to create a UserCyber
     *   }
     * })
     * 
     */
    create<T extends UserCyberCreateArgs>(args: SelectSubset<T, UserCyberCreateArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserCybers.
     * @param {UserCyberCreateManyArgs} args - Arguments to create many UserCybers.
     * @example
     * // Create many UserCybers
     * const userCyber = await prisma.userCyber.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCyberCreateManyArgs>(args?: SelectSubset<T, UserCyberCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserCybers and returns the data saved in the database.
     * @param {UserCyberCreateManyAndReturnArgs} args - Arguments to create many UserCybers.
     * @example
     * // Create many UserCybers
     * const userCyber = await prisma.userCyber.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserCybers and only return the `userId`
     * const userCyberWithUserIdOnly = await prisma.userCyber.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCyberCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCyberCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserCyber.
     * @param {UserCyberDeleteArgs} args - Arguments to delete one UserCyber.
     * @example
     * // Delete one UserCyber
     * const UserCyber = await prisma.userCyber.delete({
     *   where: {
     *     // ... filter to delete one UserCyber
     *   }
     * })
     * 
     */
    delete<T extends UserCyberDeleteArgs>(args: SelectSubset<T, UserCyberDeleteArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserCyber.
     * @param {UserCyberUpdateArgs} args - Arguments to update one UserCyber.
     * @example
     * // Update one UserCyber
     * const userCyber = await prisma.userCyber.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserCyberUpdateArgs>(args: SelectSubset<T, UserCyberUpdateArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserCybers.
     * @param {UserCyberDeleteManyArgs} args - Arguments to filter UserCybers to delete.
     * @example
     * // Delete a few UserCybers
     * const { count } = await prisma.userCyber.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserCyberDeleteManyArgs>(args?: SelectSubset<T, UserCyberDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCybers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserCybers
     * const userCyber = await prisma.userCyber.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserCyberUpdateManyArgs>(args: SelectSubset<T, UserCyberUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserCybers and returns the data updated in the database.
     * @param {UserCyberUpdateManyAndReturnArgs} args - Arguments to update many UserCybers.
     * @example
     * // Update many UserCybers
     * const userCyber = await prisma.userCyber.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserCybers and only return the `userId`
     * const userCyberWithUserIdOnly = await prisma.userCyber.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserCyberUpdateManyAndReturnArgs>(args: SelectSubset<T, UserCyberUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserCyber.
     * @param {UserCyberUpsertArgs} args - Arguments to update or create a UserCyber.
     * @example
     * // Update or create a UserCyber
     * const userCyber = await prisma.userCyber.upsert({
     *   create: {
     *     // ... data to create a UserCyber
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserCyber we want to update
     *   }
     * })
     */
    upsert<T extends UserCyberUpsertArgs>(args: SelectSubset<T, UserCyberUpsertArgs<ExtArgs>>): Prisma__UserCyberClient<$Result.GetResult<Prisma.$UserCyberPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserCybers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberCountArgs} args - Arguments to filter UserCybers to count.
     * @example
     * // Count the number of UserCybers
     * const count = await prisma.userCyber.count({
     *   where: {
     *     // ... the filter for the UserCybers we want to count
     *   }
     * })
    **/
    count<T extends UserCyberCountArgs>(
      args?: Subset<T, UserCyberCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCyberCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserCyber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserCyberAggregateArgs>(args: Subset<T, UserCyberAggregateArgs>): Prisma.PrismaPromise<GetUserCyberAggregateType<T>>

    /**
     * Group by UserCyber.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCyberGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserCyberGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserCyberGroupByArgs['orderBy'] }
        : { orderBy?: UserCyberGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserCyberGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserCyberGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserCyber model
   */
  readonly fields: UserCyberFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserCyber.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserCyberClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserCyber model
   */
  interface UserCyberFieldRefs {
    readonly userId: FieldRef<"UserCyber", 'String'>
    readonly cyberId: FieldRef<"UserCyber", 'String'>
    readonly assignedAt: FieldRef<"UserCyber", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserCyber findUnique
   */
  export type UserCyberFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter, which UserCyber to fetch.
     */
    where: UserCyberWhereUniqueInput
  }

  /**
   * UserCyber findUniqueOrThrow
   */
  export type UserCyberFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter, which UserCyber to fetch.
     */
    where: UserCyberWhereUniqueInput
  }

  /**
   * UserCyber findFirst
   */
  export type UserCyberFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter, which UserCyber to fetch.
     */
    where?: UserCyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCybers to fetch.
     */
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCybers.
     */
    cursor?: UserCyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCybers.
     */
    distinct?: UserCyberScalarFieldEnum | UserCyberScalarFieldEnum[]
  }

  /**
   * UserCyber findFirstOrThrow
   */
  export type UserCyberFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter, which UserCyber to fetch.
     */
    where?: UserCyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCybers to fetch.
     */
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserCybers.
     */
    cursor?: UserCyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCybers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserCybers.
     */
    distinct?: UserCyberScalarFieldEnum | UserCyberScalarFieldEnum[]
  }

  /**
   * UserCyber findMany
   */
  export type UserCyberFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter, which UserCybers to fetch.
     */
    where?: UserCyberWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserCybers to fetch.
     */
    orderBy?: UserCyberOrderByWithRelationInput | UserCyberOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserCybers.
     */
    cursor?: UserCyberWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserCybers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserCybers.
     */
    skip?: number
    distinct?: UserCyberScalarFieldEnum | UserCyberScalarFieldEnum[]
  }

  /**
   * UserCyber create
   */
  export type UserCyberCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * The data needed to create a UserCyber.
     */
    data: XOR<UserCyberCreateInput, UserCyberUncheckedCreateInput>
  }

  /**
   * UserCyber createMany
   */
  export type UserCyberCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserCybers.
     */
    data: UserCyberCreateManyInput | UserCyberCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserCyber createManyAndReturn
   */
  export type UserCyberCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * The data used to create many UserCybers.
     */
    data: UserCyberCreateManyInput | UserCyberCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCyber update
   */
  export type UserCyberUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * The data needed to update a UserCyber.
     */
    data: XOR<UserCyberUpdateInput, UserCyberUncheckedUpdateInput>
    /**
     * Choose, which UserCyber to update.
     */
    where: UserCyberWhereUniqueInput
  }

  /**
   * UserCyber updateMany
   */
  export type UserCyberUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserCybers.
     */
    data: XOR<UserCyberUpdateManyMutationInput, UserCyberUncheckedUpdateManyInput>
    /**
     * Filter which UserCybers to update
     */
    where?: UserCyberWhereInput
    /**
     * Limit how many UserCybers to update.
     */
    limit?: number
  }

  /**
   * UserCyber updateManyAndReturn
   */
  export type UserCyberUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * The data used to update UserCybers.
     */
    data: XOR<UserCyberUpdateManyMutationInput, UserCyberUncheckedUpdateManyInput>
    /**
     * Filter which UserCybers to update
     */
    where?: UserCyberWhereInput
    /**
     * Limit how many UserCybers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserCyber upsert
   */
  export type UserCyberUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * The filter to search for the UserCyber to update in case it exists.
     */
    where: UserCyberWhereUniqueInput
    /**
     * In case the UserCyber found by the `where` argument doesn't exist, create a new UserCyber with this data.
     */
    create: XOR<UserCyberCreateInput, UserCyberUncheckedCreateInput>
    /**
     * In case the UserCyber was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserCyberUpdateInput, UserCyberUncheckedUpdateInput>
  }

  /**
   * UserCyber delete
   */
  export type UserCyberDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
    /**
     * Filter which UserCyber to delete.
     */
    where: UserCyberWhereUniqueInput
  }

  /**
   * UserCyber deleteMany
   */
  export type UserCyberDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserCybers to delete
     */
    where?: UserCyberWhereInput
    /**
     * Limit how many UserCybers to delete.
     */
    limit?: number
  }

  /**
   * UserCyber without action
   */
  export type UserCyberDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCyber
     */
    select?: UserCyberSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserCyber
     */
    omit?: UserCyberOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserCyberInclude<ExtArgs> | null
  }


  /**
   * Model FideliteConfig
   */

  export type AggregateFideliteConfig = {
    _count: FideliteConfigCountAggregateOutputType | null
    _avg: FideliteConfigAvgAggregateOutputType | null
    _sum: FideliteConfigSumAggregateOutputType | null
    _min: FideliteConfigMinAggregateOutputType | null
    _max: FideliteConfigMaxAggregateOutputType | null
  }

  export type FideliteConfigAvgAggregateOutputType = {
    pointsParMinuteAchat: number | null
    pointsPourMinuteGratuite: number | null
    pointsPour100Ar: number | null
  }

  export type FideliteConfigSumAggregateOutputType = {
    pointsParMinuteAchat: number | null
    pointsPourMinuteGratuite: number | null
    pointsPour100Ar: number | null
  }

  export type FideliteConfigMinAggregateOutputType = {
    id: string | null
    pointsParMinuteAchat: number | null
    pointsPourMinuteGratuite: number | null
    pointsPour100Ar: number | null
    actif: boolean | null
    updatedAt: Date | null
  }

  export type FideliteConfigMaxAggregateOutputType = {
    id: string | null
    pointsParMinuteAchat: number | null
    pointsPourMinuteGratuite: number | null
    pointsPour100Ar: number | null
    actif: boolean | null
    updatedAt: Date | null
  }

  export type FideliteConfigCountAggregateOutputType = {
    id: number
    pointsParMinuteAchat: number
    pointsPourMinuteGratuite: number
    pointsPour100Ar: number
    actif: number
    updatedAt: number
    _all: number
  }


  export type FideliteConfigAvgAggregateInputType = {
    pointsParMinuteAchat?: true
    pointsPourMinuteGratuite?: true
    pointsPour100Ar?: true
  }

  export type FideliteConfigSumAggregateInputType = {
    pointsParMinuteAchat?: true
    pointsPourMinuteGratuite?: true
    pointsPour100Ar?: true
  }

  export type FideliteConfigMinAggregateInputType = {
    id?: true
    pointsParMinuteAchat?: true
    pointsPourMinuteGratuite?: true
    pointsPour100Ar?: true
    actif?: true
    updatedAt?: true
  }

  export type FideliteConfigMaxAggregateInputType = {
    id?: true
    pointsParMinuteAchat?: true
    pointsPourMinuteGratuite?: true
    pointsPour100Ar?: true
    actif?: true
    updatedAt?: true
  }

  export type FideliteConfigCountAggregateInputType = {
    id?: true
    pointsParMinuteAchat?: true
    pointsPourMinuteGratuite?: true
    pointsPour100Ar?: true
    actif?: true
    updatedAt?: true
    _all?: true
  }

  export type FideliteConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FideliteConfig to aggregate.
     */
    where?: FideliteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FideliteConfigs to fetch.
     */
    orderBy?: FideliteConfigOrderByWithRelationInput | FideliteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FideliteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FideliteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FideliteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FideliteConfigs
    **/
    _count?: true | FideliteConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FideliteConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FideliteConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FideliteConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FideliteConfigMaxAggregateInputType
  }

  export type GetFideliteConfigAggregateType<T extends FideliteConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateFideliteConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFideliteConfig[P]>
      : GetScalarType<T[P], AggregateFideliteConfig[P]>
  }




  export type FideliteConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FideliteConfigWhereInput
    orderBy?: FideliteConfigOrderByWithAggregationInput | FideliteConfigOrderByWithAggregationInput[]
    by: FideliteConfigScalarFieldEnum[] | FideliteConfigScalarFieldEnum
    having?: FideliteConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FideliteConfigCountAggregateInputType | true
    _avg?: FideliteConfigAvgAggregateInputType
    _sum?: FideliteConfigSumAggregateInputType
    _min?: FideliteConfigMinAggregateInputType
    _max?: FideliteConfigMaxAggregateInputType
  }

  export type FideliteConfigGroupByOutputType = {
    id: string
    pointsParMinuteAchat: number
    pointsPourMinuteGratuite: number
    pointsPour100Ar: number
    actif: boolean
    updatedAt: Date
    _count: FideliteConfigCountAggregateOutputType | null
    _avg: FideliteConfigAvgAggregateOutputType | null
    _sum: FideliteConfigSumAggregateOutputType | null
    _min: FideliteConfigMinAggregateOutputType | null
    _max: FideliteConfigMaxAggregateOutputType | null
  }

  type GetFideliteConfigGroupByPayload<T extends FideliteConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FideliteConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FideliteConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FideliteConfigGroupByOutputType[P]>
            : GetScalarType<T[P], FideliteConfigGroupByOutputType[P]>
        }
      >
    >


  export type FideliteConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointsParMinuteAchat?: boolean
    pointsPourMinuteGratuite?: boolean
    pointsPour100Ar?: boolean
    actif?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fideliteConfig"]>

  export type FideliteConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointsParMinuteAchat?: boolean
    pointsPourMinuteGratuite?: boolean
    pointsPour100Ar?: boolean
    actif?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fideliteConfig"]>

  export type FideliteConfigSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pointsParMinuteAchat?: boolean
    pointsPourMinuteGratuite?: boolean
    pointsPour100Ar?: boolean
    actif?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["fideliteConfig"]>

  export type FideliteConfigSelectScalar = {
    id?: boolean
    pointsParMinuteAchat?: boolean
    pointsPourMinuteGratuite?: boolean
    pointsPour100Ar?: boolean
    actif?: boolean
    updatedAt?: boolean
  }

  export type FideliteConfigOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pointsParMinuteAchat" | "pointsPourMinuteGratuite" | "pointsPour100Ar" | "actif" | "updatedAt", ExtArgs["result"]["fideliteConfig"]>

  export type $FideliteConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FideliteConfig"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pointsParMinuteAchat: number
      pointsPourMinuteGratuite: number
      pointsPour100Ar: number
      actif: boolean
      updatedAt: Date
    }, ExtArgs["result"]["fideliteConfig"]>
    composites: {}
  }

  type FideliteConfigGetPayload<S extends boolean | null | undefined | FideliteConfigDefaultArgs> = $Result.GetResult<Prisma.$FideliteConfigPayload, S>

  type FideliteConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FideliteConfigFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FideliteConfigCountAggregateInputType | true
    }

  export interface FideliteConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FideliteConfig'], meta: { name: 'FideliteConfig' } }
    /**
     * Find zero or one FideliteConfig that matches the filter.
     * @param {FideliteConfigFindUniqueArgs} args - Arguments to find a FideliteConfig
     * @example
     * // Get one FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FideliteConfigFindUniqueArgs>(args: SelectSubset<T, FideliteConfigFindUniqueArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one FideliteConfig that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FideliteConfigFindUniqueOrThrowArgs} args - Arguments to find a FideliteConfig
     * @example
     * // Get one FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FideliteConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, FideliteConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FideliteConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigFindFirstArgs} args - Arguments to find a FideliteConfig
     * @example
     * // Get one FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FideliteConfigFindFirstArgs>(args?: SelectSubset<T, FideliteConfigFindFirstArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first FideliteConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigFindFirstOrThrowArgs} args - Arguments to find a FideliteConfig
     * @example
     * // Get one FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FideliteConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, FideliteConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more FideliteConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FideliteConfigs
     * const fideliteConfigs = await prisma.fideliteConfig.findMany()
     * 
     * // Get first 10 FideliteConfigs
     * const fideliteConfigs = await prisma.fideliteConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const fideliteConfigWithIdOnly = await prisma.fideliteConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FideliteConfigFindManyArgs>(args?: SelectSubset<T, FideliteConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a FideliteConfig.
     * @param {FideliteConfigCreateArgs} args - Arguments to create a FideliteConfig.
     * @example
     * // Create one FideliteConfig
     * const FideliteConfig = await prisma.fideliteConfig.create({
     *   data: {
     *     // ... data to create a FideliteConfig
     *   }
     * })
     * 
     */
    create<T extends FideliteConfigCreateArgs>(args: SelectSubset<T, FideliteConfigCreateArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many FideliteConfigs.
     * @param {FideliteConfigCreateManyArgs} args - Arguments to create many FideliteConfigs.
     * @example
     * // Create many FideliteConfigs
     * const fideliteConfig = await prisma.fideliteConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FideliteConfigCreateManyArgs>(args?: SelectSubset<T, FideliteConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many FideliteConfigs and returns the data saved in the database.
     * @param {FideliteConfigCreateManyAndReturnArgs} args - Arguments to create many FideliteConfigs.
     * @example
     * // Create many FideliteConfigs
     * const fideliteConfig = await prisma.fideliteConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many FideliteConfigs and only return the `id`
     * const fideliteConfigWithIdOnly = await prisma.fideliteConfig.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FideliteConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, FideliteConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a FideliteConfig.
     * @param {FideliteConfigDeleteArgs} args - Arguments to delete one FideliteConfig.
     * @example
     * // Delete one FideliteConfig
     * const FideliteConfig = await prisma.fideliteConfig.delete({
     *   where: {
     *     // ... filter to delete one FideliteConfig
     *   }
     * })
     * 
     */
    delete<T extends FideliteConfigDeleteArgs>(args: SelectSubset<T, FideliteConfigDeleteArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one FideliteConfig.
     * @param {FideliteConfigUpdateArgs} args - Arguments to update one FideliteConfig.
     * @example
     * // Update one FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FideliteConfigUpdateArgs>(args: SelectSubset<T, FideliteConfigUpdateArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more FideliteConfigs.
     * @param {FideliteConfigDeleteManyArgs} args - Arguments to filter FideliteConfigs to delete.
     * @example
     * // Delete a few FideliteConfigs
     * const { count } = await prisma.fideliteConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FideliteConfigDeleteManyArgs>(args?: SelectSubset<T, FideliteConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FideliteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FideliteConfigs
     * const fideliteConfig = await prisma.fideliteConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FideliteConfigUpdateManyArgs>(args: SelectSubset<T, FideliteConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FideliteConfigs and returns the data updated in the database.
     * @param {FideliteConfigUpdateManyAndReturnArgs} args - Arguments to update many FideliteConfigs.
     * @example
     * // Update many FideliteConfigs
     * const fideliteConfig = await prisma.fideliteConfig.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more FideliteConfigs and only return the `id`
     * const fideliteConfigWithIdOnly = await prisma.fideliteConfig.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FideliteConfigUpdateManyAndReturnArgs>(args: SelectSubset<T, FideliteConfigUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one FideliteConfig.
     * @param {FideliteConfigUpsertArgs} args - Arguments to update or create a FideliteConfig.
     * @example
     * // Update or create a FideliteConfig
     * const fideliteConfig = await prisma.fideliteConfig.upsert({
     *   create: {
     *     // ... data to create a FideliteConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FideliteConfig we want to update
     *   }
     * })
     */
    upsert<T extends FideliteConfigUpsertArgs>(args: SelectSubset<T, FideliteConfigUpsertArgs<ExtArgs>>): Prisma__FideliteConfigClient<$Result.GetResult<Prisma.$FideliteConfigPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of FideliteConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigCountArgs} args - Arguments to filter FideliteConfigs to count.
     * @example
     * // Count the number of FideliteConfigs
     * const count = await prisma.fideliteConfig.count({
     *   where: {
     *     // ... the filter for the FideliteConfigs we want to count
     *   }
     * })
    **/
    count<T extends FideliteConfigCountArgs>(
      args?: Subset<T, FideliteConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FideliteConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FideliteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FideliteConfigAggregateArgs>(args: Subset<T, FideliteConfigAggregateArgs>): Prisma.PrismaPromise<GetFideliteConfigAggregateType<T>>

    /**
     * Group by FideliteConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FideliteConfigGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FideliteConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FideliteConfigGroupByArgs['orderBy'] }
        : { orderBy?: FideliteConfigGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FideliteConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFideliteConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FideliteConfig model
   */
  readonly fields: FideliteConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FideliteConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FideliteConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FideliteConfig model
   */
  interface FideliteConfigFieldRefs {
    readonly id: FieldRef<"FideliteConfig", 'String'>
    readonly pointsParMinuteAchat: FieldRef<"FideliteConfig", 'Int'>
    readonly pointsPourMinuteGratuite: FieldRef<"FideliteConfig", 'Int'>
    readonly pointsPour100Ar: FieldRef<"FideliteConfig", 'Int'>
    readonly actif: FieldRef<"FideliteConfig", 'Boolean'>
    readonly updatedAt: FieldRef<"FideliteConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FideliteConfig findUnique
   */
  export type FideliteConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter, which FideliteConfig to fetch.
     */
    where: FideliteConfigWhereUniqueInput
  }

  /**
   * FideliteConfig findUniqueOrThrow
   */
  export type FideliteConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter, which FideliteConfig to fetch.
     */
    where: FideliteConfigWhereUniqueInput
  }

  /**
   * FideliteConfig findFirst
   */
  export type FideliteConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter, which FideliteConfig to fetch.
     */
    where?: FideliteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FideliteConfigs to fetch.
     */
    orderBy?: FideliteConfigOrderByWithRelationInput | FideliteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FideliteConfigs.
     */
    cursor?: FideliteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FideliteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FideliteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FideliteConfigs.
     */
    distinct?: FideliteConfigScalarFieldEnum | FideliteConfigScalarFieldEnum[]
  }

  /**
   * FideliteConfig findFirstOrThrow
   */
  export type FideliteConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter, which FideliteConfig to fetch.
     */
    where?: FideliteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FideliteConfigs to fetch.
     */
    orderBy?: FideliteConfigOrderByWithRelationInput | FideliteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FideliteConfigs.
     */
    cursor?: FideliteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FideliteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FideliteConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FideliteConfigs.
     */
    distinct?: FideliteConfigScalarFieldEnum | FideliteConfigScalarFieldEnum[]
  }

  /**
   * FideliteConfig findMany
   */
  export type FideliteConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter, which FideliteConfigs to fetch.
     */
    where?: FideliteConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FideliteConfigs to fetch.
     */
    orderBy?: FideliteConfigOrderByWithRelationInput | FideliteConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FideliteConfigs.
     */
    cursor?: FideliteConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FideliteConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FideliteConfigs.
     */
    skip?: number
    distinct?: FideliteConfigScalarFieldEnum | FideliteConfigScalarFieldEnum[]
  }

  /**
   * FideliteConfig create
   */
  export type FideliteConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * The data needed to create a FideliteConfig.
     */
    data: XOR<FideliteConfigCreateInput, FideliteConfigUncheckedCreateInput>
  }

  /**
   * FideliteConfig createMany
   */
  export type FideliteConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FideliteConfigs.
     */
    data: FideliteConfigCreateManyInput | FideliteConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FideliteConfig createManyAndReturn
   */
  export type FideliteConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * The data used to create many FideliteConfigs.
     */
    data: FideliteConfigCreateManyInput | FideliteConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * FideliteConfig update
   */
  export type FideliteConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * The data needed to update a FideliteConfig.
     */
    data: XOR<FideliteConfigUpdateInput, FideliteConfigUncheckedUpdateInput>
    /**
     * Choose, which FideliteConfig to update.
     */
    where: FideliteConfigWhereUniqueInput
  }

  /**
   * FideliteConfig updateMany
   */
  export type FideliteConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FideliteConfigs.
     */
    data: XOR<FideliteConfigUpdateManyMutationInput, FideliteConfigUncheckedUpdateManyInput>
    /**
     * Filter which FideliteConfigs to update
     */
    where?: FideliteConfigWhereInput
    /**
     * Limit how many FideliteConfigs to update.
     */
    limit?: number
  }

  /**
   * FideliteConfig updateManyAndReturn
   */
  export type FideliteConfigUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * The data used to update FideliteConfigs.
     */
    data: XOR<FideliteConfigUpdateManyMutationInput, FideliteConfigUncheckedUpdateManyInput>
    /**
     * Filter which FideliteConfigs to update
     */
    where?: FideliteConfigWhereInput
    /**
     * Limit how many FideliteConfigs to update.
     */
    limit?: number
  }

  /**
   * FideliteConfig upsert
   */
  export type FideliteConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * The filter to search for the FideliteConfig to update in case it exists.
     */
    where: FideliteConfigWhereUniqueInput
    /**
     * In case the FideliteConfig found by the `where` argument doesn't exist, create a new FideliteConfig with this data.
     */
    create: XOR<FideliteConfigCreateInput, FideliteConfigUncheckedCreateInput>
    /**
     * In case the FideliteConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FideliteConfigUpdateInput, FideliteConfigUncheckedUpdateInput>
  }

  /**
   * FideliteConfig delete
   */
  export type FideliteConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
    /**
     * Filter which FideliteConfig to delete.
     */
    where: FideliteConfigWhereUniqueInput
  }

  /**
   * FideliteConfig deleteMany
   */
  export type FideliteConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FideliteConfigs to delete
     */
    where?: FideliteConfigWhereInput
    /**
     * Limit how many FideliteConfigs to delete.
     */
    limit?: number
  }

  /**
   * FideliteConfig without action
   */
  export type FideliteConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FideliteConfig
     */
    select?: FideliteConfigSelect<ExtArgs> | null
    /**
     * Omit specific fields from the FideliteConfig
     */
    omit?: FideliteConfigOmit<ExtArgs> | null
  }


  /**
   * Model ClientFidelite
   */

  export type AggregateClientFidelite = {
    _count: ClientFideliteCountAggregateOutputType | null
    _min: ClientFideliteMinAggregateOutputType | null
    _max: ClientFideliteMaxAggregateOutputType | null
  }

  export type ClientFideliteMinAggregateOutputType = {
    id: string | null
    telephone: string | null
    nom: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ClientFideliteMaxAggregateOutputType = {
    id: string | null
    telephone: string | null
    nom: string | null
    isActive: boolean | null
    createdAt: Date | null
  }

  export type ClientFideliteCountAggregateOutputType = {
    id: number
    telephone: number
    nom: number
    isActive: number
    createdAt: number
    _all: number
  }


  export type ClientFideliteMinAggregateInputType = {
    id?: true
    telephone?: true
    nom?: true
    isActive?: true
    createdAt?: true
  }

  export type ClientFideliteMaxAggregateInputType = {
    id?: true
    telephone?: true
    nom?: true
    isActive?: true
    createdAt?: true
  }

  export type ClientFideliteCountAggregateInputType = {
    id?: true
    telephone?: true
    nom?: true
    isActive?: true
    createdAt?: true
    _all?: true
  }

  export type ClientFideliteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientFidelite to aggregate.
     */
    where?: ClientFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientFidelites to fetch.
     */
    orderBy?: ClientFideliteOrderByWithRelationInput | ClientFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientFidelites
    **/
    _count?: true | ClientFideliteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientFideliteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientFideliteMaxAggregateInputType
  }

  export type GetClientFideliteAggregateType<T extends ClientFideliteAggregateArgs> = {
        [P in keyof T & keyof AggregateClientFidelite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientFidelite[P]>
      : GetScalarType<T[P], AggregateClientFidelite[P]>
  }




  export type ClientFideliteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientFideliteWhereInput
    orderBy?: ClientFideliteOrderByWithAggregationInput | ClientFideliteOrderByWithAggregationInput[]
    by: ClientFideliteScalarFieldEnum[] | ClientFideliteScalarFieldEnum
    having?: ClientFideliteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientFideliteCountAggregateInputType | true
    _min?: ClientFideliteMinAggregateInputType
    _max?: ClientFideliteMaxAggregateInputType
  }

  export type ClientFideliteGroupByOutputType = {
    id: string
    telephone: string
    nom: string | null
    isActive: boolean
    createdAt: Date
    _count: ClientFideliteCountAggregateOutputType | null
    _min: ClientFideliteMinAggregateOutputType | null
    _max: ClientFideliteMaxAggregateOutputType | null
  }

  type GetClientFideliteGroupByPayload<T extends ClientFideliteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientFideliteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientFideliteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientFideliteGroupByOutputType[P]>
            : GetScalarType<T[P], ClientFideliteGroupByOutputType[P]>
        }
      >
    >


  export type ClientFideliteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telephone?: boolean
    nom?: boolean
    isActive?: boolean
    createdAt?: boolean
    tickets?: boolean | ClientFidelite$ticketsArgs<ExtArgs>
    mouvements?: boolean | ClientFidelite$mouvementsArgs<ExtArgs>
    _count?: boolean | ClientFideliteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientFidelite"]>

  export type ClientFideliteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telephone?: boolean
    nom?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientFidelite"]>

  export type ClientFideliteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    telephone?: boolean
    nom?: boolean
    isActive?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["clientFidelite"]>

  export type ClientFideliteSelectScalar = {
    id?: boolean
    telephone?: boolean
    nom?: boolean
    isActive?: boolean
    createdAt?: boolean
  }

  export type ClientFideliteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "telephone" | "nom" | "isActive" | "createdAt", ExtArgs["result"]["clientFidelite"]>
  export type ClientFideliteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tickets?: boolean | ClientFidelite$ticketsArgs<ExtArgs>
    mouvements?: boolean | ClientFidelite$mouvementsArgs<ExtArgs>
    _count?: boolean | ClientFideliteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientFideliteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientFideliteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientFidelitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientFidelite"
    objects: {
      tickets: Prisma.$TicketPayload<ExtArgs>[]
      mouvements: Prisma.$MouvementFidelitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      telephone: string
      nom: string | null
      isActive: boolean
      createdAt: Date
    }, ExtArgs["result"]["clientFidelite"]>
    composites: {}
  }

  type ClientFideliteGetPayload<S extends boolean | null | undefined | ClientFideliteDefaultArgs> = $Result.GetResult<Prisma.$ClientFidelitePayload, S>

  type ClientFideliteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFideliteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientFideliteCountAggregateInputType | true
    }

  export interface ClientFideliteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientFidelite'], meta: { name: 'ClientFidelite' } }
    /**
     * Find zero or one ClientFidelite that matches the filter.
     * @param {ClientFideliteFindUniqueArgs} args - Arguments to find a ClientFidelite
     * @example
     * // Get one ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFideliteFindUniqueArgs>(args: SelectSubset<T, ClientFideliteFindUniqueArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientFidelite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFideliteFindUniqueOrThrowArgs} args - Arguments to find a ClientFidelite
     * @example
     * // Get one ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFideliteFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFideliteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientFidelite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteFindFirstArgs} args - Arguments to find a ClientFidelite
     * @example
     * // Get one ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFideliteFindFirstArgs>(args?: SelectSubset<T, ClientFideliteFindFirstArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientFidelite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteFindFirstOrThrowArgs} args - Arguments to find a ClientFidelite
     * @example
     * // Get one ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFideliteFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFideliteFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientFidelites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientFidelites
     * const clientFidelites = await prisma.clientFidelite.findMany()
     * 
     * // Get first 10 ClientFidelites
     * const clientFidelites = await prisma.clientFidelite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientFideliteWithIdOnly = await prisma.clientFidelite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFideliteFindManyArgs>(args?: SelectSubset<T, ClientFideliteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientFidelite.
     * @param {ClientFideliteCreateArgs} args - Arguments to create a ClientFidelite.
     * @example
     * // Create one ClientFidelite
     * const ClientFidelite = await prisma.clientFidelite.create({
     *   data: {
     *     // ... data to create a ClientFidelite
     *   }
     * })
     * 
     */
    create<T extends ClientFideliteCreateArgs>(args: SelectSubset<T, ClientFideliteCreateArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientFidelites.
     * @param {ClientFideliteCreateManyArgs} args - Arguments to create many ClientFidelites.
     * @example
     * // Create many ClientFidelites
     * const clientFidelite = await prisma.clientFidelite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientFideliteCreateManyArgs>(args?: SelectSubset<T, ClientFideliteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientFidelites and returns the data saved in the database.
     * @param {ClientFideliteCreateManyAndReturnArgs} args - Arguments to create many ClientFidelites.
     * @example
     * // Create many ClientFidelites
     * const clientFidelite = await prisma.clientFidelite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientFidelites and only return the `id`
     * const clientFideliteWithIdOnly = await prisma.clientFidelite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientFideliteCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientFideliteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientFidelite.
     * @param {ClientFideliteDeleteArgs} args - Arguments to delete one ClientFidelite.
     * @example
     * // Delete one ClientFidelite
     * const ClientFidelite = await prisma.clientFidelite.delete({
     *   where: {
     *     // ... filter to delete one ClientFidelite
     *   }
     * })
     * 
     */
    delete<T extends ClientFideliteDeleteArgs>(args: SelectSubset<T, ClientFideliteDeleteArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientFidelite.
     * @param {ClientFideliteUpdateArgs} args - Arguments to update one ClientFidelite.
     * @example
     * // Update one ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientFideliteUpdateArgs>(args: SelectSubset<T, ClientFideliteUpdateArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientFidelites.
     * @param {ClientFideliteDeleteManyArgs} args - Arguments to filter ClientFidelites to delete.
     * @example
     * // Delete a few ClientFidelites
     * const { count } = await prisma.clientFidelite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientFideliteDeleteManyArgs>(args?: SelectSubset<T, ClientFideliteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientFidelites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientFidelites
     * const clientFidelite = await prisma.clientFidelite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientFideliteUpdateManyArgs>(args: SelectSubset<T, ClientFideliteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientFidelites and returns the data updated in the database.
     * @param {ClientFideliteUpdateManyAndReturnArgs} args - Arguments to update many ClientFidelites.
     * @example
     * // Update many ClientFidelites
     * const clientFidelite = await prisma.clientFidelite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientFidelites and only return the `id`
     * const clientFideliteWithIdOnly = await prisma.clientFidelite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientFideliteUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientFideliteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientFidelite.
     * @param {ClientFideliteUpsertArgs} args - Arguments to update or create a ClientFidelite.
     * @example
     * // Update or create a ClientFidelite
     * const clientFidelite = await prisma.clientFidelite.upsert({
     *   create: {
     *     // ... data to create a ClientFidelite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientFidelite we want to update
     *   }
     * })
     */
    upsert<T extends ClientFideliteUpsertArgs>(args: SelectSubset<T, ClientFideliteUpsertArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientFidelites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteCountArgs} args - Arguments to filter ClientFidelites to count.
     * @example
     * // Count the number of ClientFidelites
     * const count = await prisma.clientFidelite.count({
     *   where: {
     *     // ... the filter for the ClientFidelites we want to count
     *   }
     * })
    **/
    count<T extends ClientFideliteCountArgs>(
      args?: Subset<T, ClientFideliteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientFideliteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientFidelite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientFideliteAggregateArgs>(args: Subset<T, ClientFideliteAggregateArgs>): Prisma.PrismaPromise<GetClientFideliteAggregateType<T>>

    /**
     * Group by ClientFidelite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFideliteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientFideliteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientFideliteGroupByArgs['orderBy'] }
        : { orderBy?: ClientFideliteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientFideliteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientFideliteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientFidelite model
   */
  readonly fields: ClientFideliteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientFidelite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientFideliteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    tickets<T extends ClientFidelite$ticketsArgs<ExtArgs> = {}>(args?: Subset<T, ClientFidelite$ticketsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mouvements<T extends ClientFidelite$mouvementsArgs<ExtArgs> = {}>(args?: Subset<T, ClientFidelite$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientFidelite model
   */
  interface ClientFideliteFieldRefs {
    readonly id: FieldRef<"ClientFidelite", 'String'>
    readonly telephone: FieldRef<"ClientFidelite", 'String'>
    readonly nom: FieldRef<"ClientFidelite", 'String'>
    readonly isActive: FieldRef<"ClientFidelite", 'Boolean'>
    readonly createdAt: FieldRef<"ClientFidelite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientFidelite findUnique
   */
  export type ClientFideliteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter, which ClientFidelite to fetch.
     */
    where: ClientFideliteWhereUniqueInput
  }

  /**
   * ClientFidelite findUniqueOrThrow
   */
  export type ClientFideliteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter, which ClientFidelite to fetch.
     */
    where: ClientFideliteWhereUniqueInput
  }

  /**
   * ClientFidelite findFirst
   */
  export type ClientFideliteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter, which ClientFidelite to fetch.
     */
    where?: ClientFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientFidelites to fetch.
     */
    orderBy?: ClientFideliteOrderByWithRelationInput | ClientFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientFidelites.
     */
    cursor?: ClientFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientFidelites.
     */
    distinct?: ClientFideliteScalarFieldEnum | ClientFideliteScalarFieldEnum[]
  }

  /**
   * ClientFidelite findFirstOrThrow
   */
  export type ClientFideliteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter, which ClientFidelite to fetch.
     */
    where?: ClientFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientFidelites to fetch.
     */
    orderBy?: ClientFideliteOrderByWithRelationInput | ClientFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientFidelites.
     */
    cursor?: ClientFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientFidelites.
     */
    distinct?: ClientFideliteScalarFieldEnum | ClientFideliteScalarFieldEnum[]
  }

  /**
   * ClientFidelite findMany
   */
  export type ClientFideliteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter, which ClientFidelites to fetch.
     */
    where?: ClientFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientFidelites to fetch.
     */
    orderBy?: ClientFideliteOrderByWithRelationInput | ClientFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientFidelites.
     */
    cursor?: ClientFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientFidelites.
     */
    skip?: number
    distinct?: ClientFideliteScalarFieldEnum | ClientFideliteScalarFieldEnum[]
  }

  /**
   * ClientFidelite create
   */
  export type ClientFideliteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientFidelite.
     */
    data: XOR<ClientFideliteCreateInput, ClientFideliteUncheckedCreateInput>
  }

  /**
   * ClientFidelite createMany
   */
  export type ClientFideliteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientFidelites.
     */
    data: ClientFideliteCreateManyInput | ClientFideliteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientFidelite createManyAndReturn
   */
  export type ClientFideliteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * The data used to create many ClientFidelites.
     */
    data: ClientFideliteCreateManyInput | ClientFideliteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientFidelite update
   */
  export type ClientFideliteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientFidelite.
     */
    data: XOR<ClientFideliteUpdateInput, ClientFideliteUncheckedUpdateInput>
    /**
     * Choose, which ClientFidelite to update.
     */
    where: ClientFideliteWhereUniqueInput
  }

  /**
   * ClientFidelite updateMany
   */
  export type ClientFideliteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientFidelites.
     */
    data: XOR<ClientFideliteUpdateManyMutationInput, ClientFideliteUncheckedUpdateManyInput>
    /**
     * Filter which ClientFidelites to update
     */
    where?: ClientFideliteWhereInput
    /**
     * Limit how many ClientFidelites to update.
     */
    limit?: number
  }

  /**
   * ClientFidelite updateManyAndReturn
   */
  export type ClientFideliteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * The data used to update ClientFidelites.
     */
    data: XOR<ClientFideliteUpdateManyMutationInput, ClientFideliteUncheckedUpdateManyInput>
    /**
     * Filter which ClientFidelites to update
     */
    where?: ClientFideliteWhereInput
    /**
     * Limit how many ClientFidelites to update.
     */
    limit?: number
  }

  /**
   * ClientFidelite upsert
   */
  export type ClientFideliteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientFidelite to update in case it exists.
     */
    where: ClientFideliteWhereUniqueInput
    /**
     * In case the ClientFidelite found by the `where` argument doesn't exist, create a new ClientFidelite with this data.
     */
    create: XOR<ClientFideliteCreateInput, ClientFideliteUncheckedCreateInput>
    /**
     * In case the ClientFidelite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientFideliteUpdateInput, ClientFideliteUncheckedUpdateInput>
  }

  /**
   * ClientFidelite delete
   */
  export type ClientFideliteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    /**
     * Filter which ClientFidelite to delete.
     */
    where: ClientFideliteWhereUniqueInput
  }

  /**
   * ClientFidelite deleteMany
   */
  export type ClientFideliteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientFidelites to delete
     */
    where?: ClientFideliteWhereInput
    /**
     * Limit how many ClientFidelites to delete.
     */
    limit?: number
  }

  /**
   * ClientFidelite.tickets
   */
  export type ClientFidelite$ticketsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    cursor?: TicketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * ClientFidelite.mouvements
   */
  export type ClientFidelite$mouvementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    where?: MouvementFideliteWhereInput
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    cursor?: MouvementFideliteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * ClientFidelite without action
   */
  export type ClientFideliteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
  }


  /**
   * Model MouvementFidelite
   */

  export type AggregateMouvementFidelite = {
    _count: MouvementFideliteCountAggregateOutputType | null
    _avg: MouvementFideliteAvgAggregateOutputType | null
    _sum: MouvementFideliteSumAggregateOutputType | null
    _min: MouvementFideliteMinAggregateOutputType | null
    _max: MouvementFideliteMaxAggregateOutputType | null
  }

  export type MouvementFideliteAvgAggregateOutputType = {
    points: number | null
  }

  export type MouvementFideliteSumAggregateOutputType = {
    points: number | null
  }

  export type MouvementFideliteMinAggregateOutputType = {
    id: string | null
    cyberId: string | null
    clientId: string | null
    type: $Enums.TypeMouvementFidelite | null
    points: number | null
    ticketId: string | null
    employeId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type MouvementFideliteMaxAggregateOutputType = {
    id: string | null
    cyberId: string | null
    clientId: string | null
    type: $Enums.TypeMouvementFidelite | null
    points: number | null
    ticketId: string | null
    employeId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type MouvementFideliteCountAggregateOutputType = {
    id: number
    cyberId: number
    clientId: number
    type: number
    points: number
    ticketId: number
    employeId: number
    description: number
    createdAt: number
    _all: number
  }


  export type MouvementFideliteAvgAggregateInputType = {
    points?: true
  }

  export type MouvementFideliteSumAggregateInputType = {
    points?: true
  }

  export type MouvementFideliteMinAggregateInputType = {
    id?: true
    cyberId?: true
    clientId?: true
    type?: true
    points?: true
    ticketId?: true
    employeId?: true
    description?: true
    createdAt?: true
  }

  export type MouvementFideliteMaxAggregateInputType = {
    id?: true
    cyberId?: true
    clientId?: true
    type?: true
    points?: true
    ticketId?: true
    employeId?: true
    description?: true
    createdAt?: true
  }

  export type MouvementFideliteCountAggregateInputType = {
    id?: true
    cyberId?: true
    clientId?: true
    type?: true
    points?: true
    ticketId?: true
    employeId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type MouvementFideliteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouvementFidelite to aggregate.
     */
    where?: MouvementFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementFidelites to fetch.
     */
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MouvementFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MouvementFidelites
    **/
    _count?: true | MouvementFideliteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MouvementFideliteAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MouvementFideliteSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MouvementFideliteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MouvementFideliteMaxAggregateInputType
  }

  export type GetMouvementFideliteAggregateType<T extends MouvementFideliteAggregateArgs> = {
        [P in keyof T & keyof AggregateMouvementFidelite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMouvementFidelite[P]>
      : GetScalarType<T[P], AggregateMouvementFidelite[P]>
  }




  export type MouvementFideliteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MouvementFideliteWhereInput
    orderBy?: MouvementFideliteOrderByWithAggregationInput | MouvementFideliteOrderByWithAggregationInput[]
    by: MouvementFideliteScalarFieldEnum[] | MouvementFideliteScalarFieldEnum
    having?: MouvementFideliteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MouvementFideliteCountAggregateInputType | true
    _avg?: MouvementFideliteAvgAggregateInputType
    _sum?: MouvementFideliteSumAggregateInputType
    _min?: MouvementFideliteMinAggregateInputType
    _max?: MouvementFideliteMaxAggregateInputType
  }

  export type MouvementFideliteGroupByOutputType = {
    id: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId: string | null
    employeId: string
    description: string
    createdAt: Date
    _count: MouvementFideliteCountAggregateOutputType | null
    _avg: MouvementFideliteAvgAggregateOutputType | null
    _sum: MouvementFideliteSumAggregateOutputType | null
    _min: MouvementFideliteMinAggregateOutputType | null
    _max: MouvementFideliteMaxAggregateOutputType | null
  }

  type GetMouvementFideliteGroupByPayload<T extends MouvementFideliteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MouvementFideliteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MouvementFideliteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MouvementFideliteGroupByOutputType[P]>
            : GetScalarType<T[P], MouvementFideliteGroupByOutputType[P]>
        }
      >
    >


  export type MouvementFideliteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    clientId?: boolean
    type?: boolean
    points?: boolean
    ticketId?: boolean
    employeId?: boolean
    description?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mouvementFidelite"]>

  export type MouvementFideliteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    clientId?: boolean
    type?: boolean
    points?: boolean
    ticketId?: boolean
    employeId?: boolean
    description?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mouvementFidelite"]>

  export type MouvementFideliteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    clientId?: boolean
    type?: boolean
    points?: boolean
    ticketId?: boolean
    employeId?: boolean
    description?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["mouvementFidelite"]>

  export type MouvementFideliteSelectScalar = {
    id?: boolean
    cyberId?: boolean
    clientId?: boolean
    type?: boolean
    points?: boolean
    ticketId?: boolean
    employeId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type MouvementFideliteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cyberId" | "clientId" | "type" | "points" | "ticketId" | "employeId" | "description" | "createdAt", ExtArgs["result"]["mouvementFidelite"]>
  export type MouvementFideliteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MouvementFideliteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MouvementFideliteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    client?: boolean | ClientFideliteDefaultArgs<ExtArgs>
    ticket?: boolean | MouvementFidelite$ticketArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MouvementFidelitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MouvementFidelite"
    objects: {
      cyber: Prisma.$CyberPayload<ExtArgs>
      client: Prisma.$ClientFidelitePayload<ExtArgs>
      ticket: Prisma.$TicketPayload<ExtArgs> | null
      employe: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cyberId: string
      clientId: string
      type: $Enums.TypeMouvementFidelite
      points: number
      ticketId: string | null
      employeId: string
      description: string
      createdAt: Date
    }, ExtArgs["result"]["mouvementFidelite"]>
    composites: {}
  }

  type MouvementFideliteGetPayload<S extends boolean | null | undefined | MouvementFideliteDefaultArgs> = $Result.GetResult<Prisma.$MouvementFidelitePayload, S>

  type MouvementFideliteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MouvementFideliteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MouvementFideliteCountAggregateInputType | true
    }

  export interface MouvementFideliteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MouvementFidelite'], meta: { name: 'MouvementFidelite' } }
    /**
     * Find zero or one MouvementFidelite that matches the filter.
     * @param {MouvementFideliteFindUniqueArgs} args - Arguments to find a MouvementFidelite
     * @example
     * // Get one MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MouvementFideliteFindUniqueArgs>(args: SelectSubset<T, MouvementFideliteFindUniqueArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MouvementFidelite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MouvementFideliteFindUniqueOrThrowArgs} args - Arguments to find a MouvementFidelite
     * @example
     * // Get one MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MouvementFideliteFindUniqueOrThrowArgs>(args: SelectSubset<T, MouvementFideliteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MouvementFidelite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteFindFirstArgs} args - Arguments to find a MouvementFidelite
     * @example
     * // Get one MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MouvementFideliteFindFirstArgs>(args?: SelectSubset<T, MouvementFideliteFindFirstArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MouvementFidelite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteFindFirstOrThrowArgs} args - Arguments to find a MouvementFidelite
     * @example
     * // Get one MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MouvementFideliteFindFirstOrThrowArgs>(args?: SelectSubset<T, MouvementFideliteFindFirstOrThrowArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MouvementFidelites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MouvementFidelites
     * const mouvementFidelites = await prisma.mouvementFidelite.findMany()
     * 
     * // Get first 10 MouvementFidelites
     * const mouvementFidelites = await prisma.mouvementFidelite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const mouvementFideliteWithIdOnly = await prisma.mouvementFidelite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MouvementFideliteFindManyArgs>(args?: SelectSubset<T, MouvementFideliteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MouvementFidelite.
     * @param {MouvementFideliteCreateArgs} args - Arguments to create a MouvementFidelite.
     * @example
     * // Create one MouvementFidelite
     * const MouvementFidelite = await prisma.mouvementFidelite.create({
     *   data: {
     *     // ... data to create a MouvementFidelite
     *   }
     * })
     * 
     */
    create<T extends MouvementFideliteCreateArgs>(args: SelectSubset<T, MouvementFideliteCreateArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MouvementFidelites.
     * @param {MouvementFideliteCreateManyArgs} args - Arguments to create many MouvementFidelites.
     * @example
     * // Create many MouvementFidelites
     * const mouvementFidelite = await prisma.mouvementFidelite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MouvementFideliteCreateManyArgs>(args?: SelectSubset<T, MouvementFideliteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MouvementFidelites and returns the data saved in the database.
     * @param {MouvementFideliteCreateManyAndReturnArgs} args - Arguments to create many MouvementFidelites.
     * @example
     * // Create many MouvementFidelites
     * const mouvementFidelite = await prisma.mouvementFidelite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MouvementFidelites and only return the `id`
     * const mouvementFideliteWithIdOnly = await prisma.mouvementFidelite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MouvementFideliteCreateManyAndReturnArgs>(args?: SelectSubset<T, MouvementFideliteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MouvementFidelite.
     * @param {MouvementFideliteDeleteArgs} args - Arguments to delete one MouvementFidelite.
     * @example
     * // Delete one MouvementFidelite
     * const MouvementFidelite = await prisma.mouvementFidelite.delete({
     *   where: {
     *     // ... filter to delete one MouvementFidelite
     *   }
     * })
     * 
     */
    delete<T extends MouvementFideliteDeleteArgs>(args: SelectSubset<T, MouvementFideliteDeleteArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MouvementFidelite.
     * @param {MouvementFideliteUpdateArgs} args - Arguments to update one MouvementFidelite.
     * @example
     * // Update one MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MouvementFideliteUpdateArgs>(args: SelectSubset<T, MouvementFideliteUpdateArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MouvementFidelites.
     * @param {MouvementFideliteDeleteManyArgs} args - Arguments to filter MouvementFidelites to delete.
     * @example
     * // Delete a few MouvementFidelites
     * const { count } = await prisma.mouvementFidelite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MouvementFideliteDeleteManyArgs>(args?: SelectSubset<T, MouvementFideliteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MouvementFidelites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MouvementFidelites
     * const mouvementFidelite = await prisma.mouvementFidelite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MouvementFideliteUpdateManyArgs>(args: SelectSubset<T, MouvementFideliteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MouvementFidelites and returns the data updated in the database.
     * @param {MouvementFideliteUpdateManyAndReturnArgs} args - Arguments to update many MouvementFidelites.
     * @example
     * // Update many MouvementFidelites
     * const mouvementFidelite = await prisma.mouvementFidelite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MouvementFidelites and only return the `id`
     * const mouvementFideliteWithIdOnly = await prisma.mouvementFidelite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MouvementFideliteUpdateManyAndReturnArgs>(args: SelectSubset<T, MouvementFideliteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MouvementFidelite.
     * @param {MouvementFideliteUpsertArgs} args - Arguments to update or create a MouvementFidelite.
     * @example
     * // Update or create a MouvementFidelite
     * const mouvementFidelite = await prisma.mouvementFidelite.upsert({
     *   create: {
     *     // ... data to create a MouvementFidelite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MouvementFidelite we want to update
     *   }
     * })
     */
    upsert<T extends MouvementFideliteUpsertArgs>(args: SelectSubset<T, MouvementFideliteUpsertArgs<ExtArgs>>): Prisma__MouvementFideliteClient<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MouvementFidelites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteCountArgs} args - Arguments to filter MouvementFidelites to count.
     * @example
     * // Count the number of MouvementFidelites
     * const count = await prisma.mouvementFidelite.count({
     *   where: {
     *     // ... the filter for the MouvementFidelites we want to count
     *   }
     * })
    **/
    count<T extends MouvementFideliteCountArgs>(
      args?: Subset<T, MouvementFideliteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MouvementFideliteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MouvementFidelite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MouvementFideliteAggregateArgs>(args: Subset<T, MouvementFideliteAggregateArgs>): Prisma.PrismaPromise<GetMouvementFideliteAggregateType<T>>

    /**
     * Group by MouvementFidelite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MouvementFideliteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MouvementFideliteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MouvementFideliteGroupByArgs['orderBy'] }
        : { orderBy?: MouvementFideliteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MouvementFideliteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMouvementFideliteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MouvementFidelite model
   */
  readonly fields: MouvementFideliteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MouvementFidelite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MouvementFideliteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    client<T extends ClientFideliteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientFideliteDefaultArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticket<T extends MouvementFidelite$ticketArgs<ExtArgs> = {}>(args?: Subset<T, MouvementFidelite$ticketArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employe<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MouvementFidelite model
   */
  interface MouvementFideliteFieldRefs {
    readonly id: FieldRef<"MouvementFidelite", 'String'>
    readonly cyberId: FieldRef<"MouvementFidelite", 'String'>
    readonly clientId: FieldRef<"MouvementFidelite", 'String'>
    readonly type: FieldRef<"MouvementFidelite", 'TypeMouvementFidelite'>
    readonly points: FieldRef<"MouvementFidelite", 'Int'>
    readonly ticketId: FieldRef<"MouvementFidelite", 'String'>
    readonly employeId: FieldRef<"MouvementFidelite", 'String'>
    readonly description: FieldRef<"MouvementFidelite", 'String'>
    readonly createdAt: FieldRef<"MouvementFidelite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MouvementFidelite findUnique
   */
  export type MouvementFideliteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter, which MouvementFidelite to fetch.
     */
    where: MouvementFideliteWhereUniqueInput
  }

  /**
   * MouvementFidelite findUniqueOrThrow
   */
  export type MouvementFideliteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter, which MouvementFidelite to fetch.
     */
    where: MouvementFideliteWhereUniqueInput
  }

  /**
   * MouvementFidelite findFirst
   */
  export type MouvementFideliteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter, which MouvementFidelite to fetch.
     */
    where?: MouvementFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementFidelites to fetch.
     */
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouvementFidelites.
     */
    cursor?: MouvementFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouvementFidelites.
     */
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * MouvementFidelite findFirstOrThrow
   */
  export type MouvementFideliteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter, which MouvementFidelite to fetch.
     */
    where?: MouvementFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementFidelites to fetch.
     */
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MouvementFidelites.
     */
    cursor?: MouvementFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementFidelites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MouvementFidelites.
     */
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * MouvementFidelite findMany
   */
  export type MouvementFideliteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter, which MouvementFidelites to fetch.
     */
    where?: MouvementFideliteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MouvementFidelites to fetch.
     */
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MouvementFidelites.
     */
    cursor?: MouvementFideliteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MouvementFidelites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MouvementFidelites.
     */
    skip?: number
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * MouvementFidelite create
   */
  export type MouvementFideliteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * The data needed to create a MouvementFidelite.
     */
    data: XOR<MouvementFideliteCreateInput, MouvementFideliteUncheckedCreateInput>
  }

  /**
   * MouvementFidelite createMany
   */
  export type MouvementFideliteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MouvementFidelites.
     */
    data: MouvementFideliteCreateManyInput | MouvementFideliteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MouvementFidelite createManyAndReturn
   */
  export type MouvementFideliteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * The data used to create many MouvementFidelites.
     */
    data: MouvementFideliteCreateManyInput | MouvementFideliteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MouvementFidelite update
   */
  export type MouvementFideliteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * The data needed to update a MouvementFidelite.
     */
    data: XOR<MouvementFideliteUpdateInput, MouvementFideliteUncheckedUpdateInput>
    /**
     * Choose, which MouvementFidelite to update.
     */
    where: MouvementFideliteWhereUniqueInput
  }

  /**
   * MouvementFidelite updateMany
   */
  export type MouvementFideliteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MouvementFidelites.
     */
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyInput>
    /**
     * Filter which MouvementFidelites to update
     */
    where?: MouvementFideliteWhereInput
    /**
     * Limit how many MouvementFidelites to update.
     */
    limit?: number
  }

  /**
   * MouvementFidelite updateManyAndReturn
   */
  export type MouvementFideliteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * The data used to update MouvementFidelites.
     */
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyInput>
    /**
     * Filter which MouvementFidelites to update
     */
    where?: MouvementFideliteWhereInput
    /**
     * Limit how many MouvementFidelites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MouvementFidelite upsert
   */
  export type MouvementFideliteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * The filter to search for the MouvementFidelite to update in case it exists.
     */
    where: MouvementFideliteWhereUniqueInput
    /**
     * In case the MouvementFidelite found by the `where` argument doesn't exist, create a new MouvementFidelite with this data.
     */
    create: XOR<MouvementFideliteCreateInput, MouvementFideliteUncheckedCreateInput>
    /**
     * In case the MouvementFidelite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MouvementFideliteUpdateInput, MouvementFideliteUncheckedUpdateInput>
  }

  /**
   * MouvementFidelite delete
   */
  export type MouvementFideliteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    /**
     * Filter which MouvementFidelite to delete.
     */
    where: MouvementFideliteWhereUniqueInput
  }

  /**
   * MouvementFidelite deleteMany
   */
  export type MouvementFideliteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MouvementFidelites to delete
     */
    where?: MouvementFideliteWhereInput
    /**
     * Limit how many MouvementFidelites to delete.
     */
    limit?: number
  }

  /**
   * MouvementFidelite.ticket
   */
  export type MouvementFidelite$ticketArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * MouvementFidelite without action
   */
  export type MouvementFideliteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
  }


  /**
   * Model Ticket
   */

  export type AggregateTicket = {
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  export type TicketAvgAggregateOutputType = {
    tempsInitial: number | null
    tempsRestant: number | null
    pointsGagnes: number | null
    pointsUtilises: number | null
    minutesBonus: number | null
    reductionAr: Decimal | null
  }

  export type TicketSumAggregateOutputType = {
    tempsInitial: number | null
    tempsRestant: number | null
    pointsGagnes: number | null
    pointsUtilises: number | null
    minutesBonus: number | null
    reductionAr: Decimal | null
  }

  export type TicketMinAggregateOutputType = {
    id: string | null
    cyberId: string | null
    codeUnique: string | null
    tempsInitial: number | null
    tempsRestant: number | null
    statut: $Enums.StatutTicket | null
    creeParId: string | null
    clientFideliteId: string | null
    pointsGagnes: number | null
    pointsUtilises: number | null
    minutesBonus: number | null
    reductionAr: Decimal | null
    createdAt: Date | null
  }

  export type TicketMaxAggregateOutputType = {
    id: string | null
    cyberId: string | null
    codeUnique: string | null
    tempsInitial: number | null
    tempsRestant: number | null
    statut: $Enums.StatutTicket | null
    creeParId: string | null
    clientFideliteId: string | null
    pointsGagnes: number | null
    pointsUtilises: number | null
    minutesBonus: number | null
    reductionAr: Decimal | null
    createdAt: Date | null
  }

  export type TicketCountAggregateOutputType = {
    id: number
    cyberId: number
    codeUnique: number
    tempsInitial: number
    tempsRestant: number
    statut: number
    creeParId: number
    clientFideliteId: number
    pointsGagnes: number
    pointsUtilises: number
    minutesBonus: number
    reductionAr: number
    createdAt: number
    _all: number
  }


  export type TicketAvgAggregateInputType = {
    tempsInitial?: true
    tempsRestant?: true
    pointsGagnes?: true
    pointsUtilises?: true
    minutesBonus?: true
    reductionAr?: true
  }

  export type TicketSumAggregateInputType = {
    tempsInitial?: true
    tempsRestant?: true
    pointsGagnes?: true
    pointsUtilises?: true
    minutesBonus?: true
    reductionAr?: true
  }

  export type TicketMinAggregateInputType = {
    id?: true
    cyberId?: true
    codeUnique?: true
    tempsInitial?: true
    tempsRestant?: true
    statut?: true
    creeParId?: true
    clientFideliteId?: true
    pointsGagnes?: true
    pointsUtilises?: true
    minutesBonus?: true
    reductionAr?: true
    createdAt?: true
  }

  export type TicketMaxAggregateInputType = {
    id?: true
    cyberId?: true
    codeUnique?: true
    tempsInitial?: true
    tempsRestant?: true
    statut?: true
    creeParId?: true
    clientFideliteId?: true
    pointsGagnes?: true
    pointsUtilises?: true
    minutesBonus?: true
    reductionAr?: true
    createdAt?: true
  }

  export type TicketCountAggregateInputType = {
    id?: true
    cyberId?: true
    codeUnique?: true
    tempsInitial?: true
    tempsRestant?: true
    statut?: true
    creeParId?: true
    clientFideliteId?: true
    pointsGagnes?: true
    pointsUtilises?: true
    minutesBonus?: true
    reductionAr?: true
    createdAt?: true
    _all?: true
  }

  export type TicketAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ticket to aggregate.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tickets
    **/
    _count?: true | TicketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TicketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TicketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TicketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TicketMaxAggregateInputType
  }

  export type GetTicketAggregateType<T extends TicketAggregateArgs> = {
        [P in keyof T & keyof AggregateTicket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTicket[P]>
      : GetScalarType<T[P], AggregateTicket[P]>
  }




  export type TicketGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TicketWhereInput
    orderBy?: TicketOrderByWithAggregationInput | TicketOrderByWithAggregationInput[]
    by: TicketScalarFieldEnum[] | TicketScalarFieldEnum
    having?: TicketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TicketCountAggregateInputType | true
    _avg?: TicketAvgAggregateInputType
    _sum?: TicketSumAggregateInputType
    _min?: TicketMinAggregateInputType
    _max?: TicketMaxAggregateInputType
  }

  export type TicketGroupByOutputType = {
    id: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut: $Enums.StatutTicket
    creeParId: string
    clientFideliteId: string | null
    pointsGagnes: number | null
    pointsUtilises: number | null
    minutesBonus: number
    reductionAr: Decimal | null
    createdAt: Date
    _count: TicketCountAggregateOutputType | null
    _avg: TicketAvgAggregateOutputType | null
    _sum: TicketSumAggregateOutputType | null
    _min: TicketMinAggregateOutputType | null
    _max: TicketMaxAggregateOutputType | null
  }

  type GetTicketGroupByPayload<T extends TicketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TicketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TicketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TicketGroupByOutputType[P]>
            : GetScalarType<T[P], TicketGroupByOutputType[P]>
        }
      >
    >


  export type TicketSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    codeUnique?: boolean
    tempsInitial?: boolean
    tempsRestant?: boolean
    statut?: boolean
    creeParId?: boolean
    clientFideliteId?: boolean
    pointsGagnes?: boolean
    pointsUtilises?: boolean
    minutesBonus?: boolean
    reductionAr?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
    sessions?: boolean | Ticket$sessionsArgs<ExtArgs>
    mouvements?: boolean | Ticket$mouvementsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    codeUnique?: boolean
    tempsInitial?: boolean
    tempsRestant?: boolean
    statut?: boolean
    creeParId?: boolean
    clientFideliteId?: boolean
    pointsGagnes?: boolean
    pointsUtilises?: boolean
    minutesBonus?: boolean
    reductionAr?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    codeUnique?: boolean
    tempsInitial?: boolean
    tempsRestant?: boolean
    statut?: boolean
    creeParId?: boolean
    clientFideliteId?: boolean
    pointsGagnes?: boolean
    pointsUtilises?: boolean
    minutesBonus?: boolean
    reductionAr?: boolean
    createdAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
  }, ExtArgs["result"]["ticket"]>

  export type TicketSelectScalar = {
    id?: boolean
    cyberId?: boolean
    codeUnique?: boolean
    tempsInitial?: boolean
    tempsRestant?: boolean
    statut?: boolean
    creeParId?: boolean
    clientFideliteId?: boolean
    pointsGagnes?: boolean
    pointsUtilises?: boolean
    minutesBonus?: boolean
    reductionAr?: boolean
    createdAt?: boolean
  }

  export type TicketOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cyberId" | "codeUnique" | "tempsInitial" | "tempsRestant" | "statut" | "creeParId" | "clientFideliteId" | "pointsGagnes" | "pointsUtilises" | "minutesBonus" | "reductionAr" | "createdAt", ExtArgs["result"]["ticket"]>
  export type TicketInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
    sessions?: boolean | Ticket$sessionsArgs<ExtArgs>
    mouvements?: boolean | Ticket$mouvementsArgs<ExtArgs>
    _count?: boolean | TicketCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TicketIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
  }
  export type TicketIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    creePar?: boolean | UserDefaultArgs<ExtArgs>
    clientFidelite?: boolean | Ticket$clientFideliteArgs<ExtArgs>
  }

  export type $TicketPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Ticket"
    objects: {
      cyber: Prisma.$CyberPayload<ExtArgs>
      creePar: Prisma.$UserPayload<ExtArgs>
      clientFidelite: Prisma.$ClientFidelitePayload<ExtArgs> | null
      sessions: Prisma.$SessionOrdinateurPayload<ExtArgs>[]
      mouvements: Prisma.$MouvementFidelitePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cyberId: string
      codeUnique: string
      tempsInitial: number
      tempsRestant: number
      statut: $Enums.StatutTicket
      creeParId: string
      clientFideliteId: string | null
      pointsGagnes: number | null
      pointsUtilises: number | null
      minutesBonus: number
      reductionAr: Prisma.Decimal | null
      createdAt: Date
    }, ExtArgs["result"]["ticket"]>
    composites: {}
  }

  type TicketGetPayload<S extends boolean | null | undefined | TicketDefaultArgs> = $Result.GetResult<Prisma.$TicketPayload, S>

  type TicketCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TicketFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TicketCountAggregateInputType | true
    }

  export interface TicketDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Ticket'], meta: { name: 'Ticket' } }
    /**
     * Find zero or one Ticket that matches the filter.
     * @param {TicketFindUniqueArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TicketFindUniqueArgs>(args: SelectSubset<T, TicketFindUniqueArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ticket that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TicketFindUniqueOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TicketFindUniqueOrThrowArgs>(args: SelectSubset<T, TicketFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TicketFindFirstArgs>(args?: SelectSubset<T, TicketFindFirstArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ticket that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindFirstOrThrowArgs} args - Arguments to find a Ticket
     * @example
     * // Get one Ticket
     * const ticket = await prisma.ticket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TicketFindFirstOrThrowArgs>(args?: SelectSubset<T, TicketFindFirstOrThrowArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tickets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tickets
     * const tickets = await prisma.ticket.findMany()
     * 
     * // Get first 10 Tickets
     * const tickets = await prisma.ticket.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ticketWithIdOnly = await prisma.ticket.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TicketFindManyArgs>(args?: SelectSubset<T, TicketFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Ticket.
     * @param {TicketCreateArgs} args - Arguments to create a Ticket.
     * @example
     * // Create one Ticket
     * const Ticket = await prisma.ticket.create({
     *   data: {
     *     // ... data to create a Ticket
     *   }
     * })
     * 
     */
    create<T extends TicketCreateArgs>(args: SelectSubset<T, TicketCreateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tickets.
     * @param {TicketCreateManyArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TicketCreateManyArgs>(args?: SelectSubset<T, TicketCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Tickets and returns the data saved in the database.
     * @param {TicketCreateManyAndReturnArgs} args - Arguments to create many Tickets.
     * @example
     * // Create many Tickets
     * const ticket = await prisma.ticket.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TicketCreateManyAndReturnArgs>(args?: SelectSubset<T, TicketCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Ticket.
     * @param {TicketDeleteArgs} args - Arguments to delete one Ticket.
     * @example
     * // Delete one Ticket
     * const Ticket = await prisma.ticket.delete({
     *   where: {
     *     // ... filter to delete one Ticket
     *   }
     * })
     * 
     */
    delete<T extends TicketDeleteArgs>(args: SelectSubset<T, TicketDeleteArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ticket.
     * @param {TicketUpdateArgs} args - Arguments to update one Ticket.
     * @example
     * // Update one Ticket
     * const ticket = await prisma.ticket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TicketUpdateArgs>(args: SelectSubset<T, TicketUpdateArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tickets.
     * @param {TicketDeleteManyArgs} args - Arguments to filter Tickets to delete.
     * @example
     * // Delete a few Tickets
     * const { count } = await prisma.ticket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TicketDeleteManyArgs>(args?: SelectSubset<T, TicketDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TicketUpdateManyArgs>(args: SelectSubset<T, TicketUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tickets and returns the data updated in the database.
     * @param {TicketUpdateManyAndReturnArgs} args - Arguments to update many Tickets.
     * @example
     * // Update many Tickets
     * const ticket = await prisma.ticket.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Tickets and only return the `id`
     * const ticketWithIdOnly = await prisma.ticket.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TicketUpdateManyAndReturnArgs>(args: SelectSubset<T, TicketUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Ticket.
     * @param {TicketUpsertArgs} args - Arguments to update or create a Ticket.
     * @example
     * // Update or create a Ticket
     * const ticket = await prisma.ticket.upsert({
     *   create: {
     *     // ... data to create a Ticket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ticket we want to update
     *   }
     * })
     */
    upsert<T extends TicketUpsertArgs>(args: SelectSubset<T, TicketUpsertArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tickets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketCountArgs} args - Arguments to filter Tickets to count.
     * @example
     * // Count the number of Tickets
     * const count = await prisma.ticket.count({
     *   where: {
     *     // ... the filter for the Tickets we want to count
     *   }
     * })
    **/
    count<T extends TicketCountArgs>(
      args?: Subset<T, TicketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TicketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TicketAggregateArgs>(args: Subset<T, TicketAggregateArgs>): Prisma.PrismaPromise<GetTicketAggregateType<T>>

    /**
     * Group by Ticket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TicketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TicketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TicketGroupByArgs['orderBy'] }
        : { orderBy?: TicketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TicketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTicketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Ticket model
   */
  readonly fields: TicketFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Ticket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TicketClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creePar<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientFidelite<T extends Ticket$clientFideliteArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$clientFideliteArgs<ExtArgs>>): Prisma__ClientFideliteClient<$Result.GetResult<Prisma.$ClientFidelitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Ticket$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    mouvements<T extends Ticket$mouvementsArgs<ExtArgs> = {}>(args?: Subset<T, Ticket$mouvementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MouvementFidelitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Ticket model
   */
  interface TicketFieldRefs {
    readonly id: FieldRef<"Ticket", 'String'>
    readonly cyberId: FieldRef<"Ticket", 'String'>
    readonly codeUnique: FieldRef<"Ticket", 'String'>
    readonly tempsInitial: FieldRef<"Ticket", 'Int'>
    readonly tempsRestant: FieldRef<"Ticket", 'Int'>
    readonly statut: FieldRef<"Ticket", 'StatutTicket'>
    readonly creeParId: FieldRef<"Ticket", 'String'>
    readonly clientFideliteId: FieldRef<"Ticket", 'String'>
    readonly pointsGagnes: FieldRef<"Ticket", 'Int'>
    readonly pointsUtilises: FieldRef<"Ticket", 'Int'>
    readonly minutesBonus: FieldRef<"Ticket", 'Int'>
    readonly reductionAr: FieldRef<"Ticket", 'Decimal'>
    readonly createdAt: FieldRef<"Ticket", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Ticket findUnique
   */
  export type TicketFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findUniqueOrThrow
   */
  export type TicketFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket findFirst
   */
  export type TicketFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findFirstOrThrow
   */
  export type TicketFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Ticket to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tickets.
     */
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket findMany
   */
  export type TicketFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter, which Tickets to fetch.
     */
    where?: TicketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tickets to fetch.
     */
    orderBy?: TicketOrderByWithRelationInput | TicketOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tickets.
     */
    cursor?: TicketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tickets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tickets.
     */
    skip?: number
    distinct?: TicketScalarFieldEnum | TicketScalarFieldEnum[]
  }

  /**
   * Ticket create
   */
  export type TicketCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to create a Ticket.
     */
    data: XOR<TicketCreateInput, TicketUncheckedCreateInput>
  }

  /**
   * Ticket createMany
   */
  export type TicketCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Ticket createManyAndReturn
   */
  export type TicketCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to create many Tickets.
     */
    data: TicketCreateManyInput | TicketCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket update
   */
  export type TicketUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The data needed to update a Ticket.
     */
    data: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
    /**
     * Choose, which Ticket to update.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket updateMany
   */
  export type TicketUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
  }

  /**
   * Ticket updateManyAndReturn
   */
  export type TicketUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * The data used to update Tickets.
     */
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyInput>
    /**
     * Filter which Tickets to update
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Ticket upsert
   */
  export type TicketUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * The filter to search for the Ticket to update in case it exists.
     */
    where: TicketWhereUniqueInput
    /**
     * In case the Ticket found by the `where` argument doesn't exist, create a new Ticket with this data.
     */
    create: XOR<TicketCreateInput, TicketUncheckedCreateInput>
    /**
     * In case the Ticket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TicketUpdateInput, TicketUncheckedUpdateInput>
  }

  /**
   * Ticket delete
   */
  export type TicketDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    /**
     * Filter which Ticket to delete.
     */
    where: TicketWhereUniqueInput
  }

  /**
   * Ticket deleteMany
   */
  export type TicketDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tickets to delete
     */
    where?: TicketWhereInput
    /**
     * Limit how many Tickets to delete.
     */
    limit?: number
  }

  /**
   * Ticket.clientFidelite
   */
  export type Ticket$clientFideliteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientFidelite
     */
    select?: ClientFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientFidelite
     */
    omit?: ClientFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientFideliteInclude<ExtArgs> | null
    where?: ClientFideliteWhereInput
  }

  /**
   * Ticket.sessions
   */
  export type Ticket$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    where?: SessionOrdinateurWhereInput
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    cursor?: SessionOrdinateurWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionOrdinateurScalarFieldEnum | SessionOrdinateurScalarFieldEnum[]
  }

  /**
   * Ticket.mouvements
   */
  export type Ticket$mouvementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MouvementFidelite
     */
    select?: MouvementFideliteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MouvementFidelite
     */
    omit?: MouvementFideliteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MouvementFideliteInclude<ExtArgs> | null
    where?: MouvementFideliteWhereInput
    orderBy?: MouvementFideliteOrderByWithRelationInput | MouvementFideliteOrderByWithRelationInput[]
    cursor?: MouvementFideliteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MouvementFideliteScalarFieldEnum | MouvementFideliteScalarFieldEnum[]
  }

  /**
   * Ticket without action
   */
  export type TicketDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
  }


  /**
   * Model SessionOrdinateur
   */

  export type AggregateSessionOrdinateur = {
    _count: SessionOrdinateurCountAggregateOutputType | null
    _avg: SessionOrdinateurAvgAggregateOutputType | null
    _sum: SessionOrdinateurSumAggregateOutputType | null
    _min: SessionOrdinateurMinAggregateOutputType | null
    _max: SessionOrdinateurMaxAggregateOutputType | null
  }

  export type SessionOrdinateurAvgAggregateOutputType = {
    numeroPoste: number | null
    baseTarifHoraire: Decimal | null
    montantDu: Decimal | null
  }

  export type SessionOrdinateurSumAggregateOutputType = {
    numeroPoste: number | null
    baseTarifHoraire: Decimal | null
    montantDu: Decimal | null
  }

  export type SessionOrdinateurMinAggregateOutputType = {
    id: string | null
    cyberId: string | null
    numeroPoste: number | null
    statut: $Enums.StatutPoste | null
    ticketActuelId: string | null
    typeSession: $Enums.TypeSession | null
    baseTarifHoraire: Decimal | null
    tempsDebut: Date | null
    tempsFin: Date | null
    montantDu: Decimal | null
    sourceMiseAJour: $Enums.SourceMiseAJour | null
    updatedAt: Date | null
  }

  export type SessionOrdinateurMaxAggregateOutputType = {
    id: string | null
    cyberId: string | null
    numeroPoste: number | null
    statut: $Enums.StatutPoste | null
    ticketActuelId: string | null
    typeSession: $Enums.TypeSession | null
    baseTarifHoraire: Decimal | null
    tempsDebut: Date | null
    tempsFin: Date | null
    montantDu: Decimal | null
    sourceMiseAJour: $Enums.SourceMiseAJour | null
    updatedAt: Date | null
  }

  export type SessionOrdinateurCountAggregateOutputType = {
    id: number
    cyberId: number
    numeroPoste: number
    statut: number
    ticketActuelId: number
    typeSession: number
    baseTarifHoraire: number
    tempsDebut: number
    tempsFin: number
    montantDu: number
    sourceMiseAJour: number
    updatedAt: number
    _all: number
  }


  export type SessionOrdinateurAvgAggregateInputType = {
    numeroPoste?: true
    baseTarifHoraire?: true
    montantDu?: true
  }

  export type SessionOrdinateurSumAggregateInputType = {
    numeroPoste?: true
    baseTarifHoraire?: true
    montantDu?: true
  }

  export type SessionOrdinateurMinAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    statut?: true
    ticketActuelId?: true
    typeSession?: true
    baseTarifHoraire?: true
    tempsDebut?: true
    tempsFin?: true
    montantDu?: true
    sourceMiseAJour?: true
    updatedAt?: true
  }

  export type SessionOrdinateurMaxAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    statut?: true
    ticketActuelId?: true
    typeSession?: true
    baseTarifHoraire?: true
    tempsDebut?: true
    tempsFin?: true
    montantDu?: true
    sourceMiseAJour?: true
    updatedAt?: true
  }

  export type SessionOrdinateurCountAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    statut?: true
    ticketActuelId?: true
    typeSession?: true
    baseTarifHoraire?: true
    tempsDebut?: true
    tempsFin?: true
    montantDu?: true
    sourceMiseAJour?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionOrdinateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionOrdinateur to aggregate.
     */
    where?: SessionOrdinateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionOrdinateurs to fetch.
     */
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionOrdinateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionOrdinateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionOrdinateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SessionOrdinateurs
    **/
    _count?: true | SessionOrdinateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionOrdinateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionOrdinateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionOrdinateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionOrdinateurMaxAggregateInputType
  }

  export type GetSessionOrdinateurAggregateType<T extends SessionOrdinateurAggregateArgs> = {
        [P in keyof T & keyof AggregateSessionOrdinateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSessionOrdinateur[P]>
      : GetScalarType<T[P], AggregateSessionOrdinateur[P]>
  }




  export type SessionOrdinateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionOrdinateurWhereInput
    orderBy?: SessionOrdinateurOrderByWithAggregationInput | SessionOrdinateurOrderByWithAggregationInput[]
    by: SessionOrdinateurScalarFieldEnum[] | SessionOrdinateurScalarFieldEnum
    having?: SessionOrdinateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionOrdinateurCountAggregateInputType | true
    _avg?: SessionOrdinateurAvgAggregateInputType
    _sum?: SessionOrdinateurSumAggregateInputType
    _min?: SessionOrdinateurMinAggregateInputType
    _max?: SessionOrdinateurMaxAggregateInputType
  }

  export type SessionOrdinateurGroupByOutputType = {
    id: string
    cyberId: string
    numeroPoste: number
    statut: $Enums.StatutPoste
    ticketActuelId: string | null
    typeSession: $Enums.TypeSession | null
    baseTarifHoraire: Decimal
    tempsDebut: Date | null
    tempsFin: Date | null
    montantDu: Decimal | null
    sourceMiseAJour: $Enums.SourceMiseAJour
    updatedAt: Date
    _count: SessionOrdinateurCountAggregateOutputType | null
    _avg: SessionOrdinateurAvgAggregateOutputType | null
    _sum: SessionOrdinateurSumAggregateOutputType | null
    _min: SessionOrdinateurMinAggregateOutputType | null
    _max: SessionOrdinateurMaxAggregateOutputType | null
  }

  type GetSessionOrdinateurGroupByPayload<T extends SessionOrdinateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionOrdinateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionOrdinateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionOrdinateurGroupByOutputType[P]>
            : GetScalarType<T[P], SessionOrdinateurGroupByOutputType[P]>
        }
      >
    >


  export type SessionOrdinateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    statut?: boolean
    ticketActuelId?: boolean
    typeSession?: boolean
    baseTarifHoraire?: boolean
    tempsDebut?: boolean
    tempsFin?: boolean
    montantDu?: boolean
    sourceMiseAJour?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }, ExtArgs["result"]["sessionOrdinateur"]>

  export type SessionOrdinateurSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    statut?: boolean
    ticketActuelId?: boolean
    typeSession?: boolean
    baseTarifHoraire?: boolean
    tempsDebut?: boolean
    tempsFin?: boolean
    montantDu?: boolean
    sourceMiseAJour?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }, ExtArgs["result"]["sessionOrdinateur"]>

  export type SessionOrdinateurSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    statut?: boolean
    ticketActuelId?: boolean
    typeSession?: boolean
    baseTarifHoraire?: boolean
    tempsDebut?: boolean
    tempsFin?: boolean
    montantDu?: boolean
    sourceMiseAJour?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }, ExtArgs["result"]["sessionOrdinateur"]>

  export type SessionOrdinateurSelectScalar = {
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    statut?: boolean
    ticketActuelId?: boolean
    typeSession?: boolean
    baseTarifHoraire?: boolean
    tempsDebut?: boolean
    tempsFin?: boolean
    montantDu?: boolean
    sourceMiseAJour?: boolean
    updatedAt?: boolean
  }

  export type SessionOrdinateurOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cyberId" | "numeroPoste" | "statut" | "ticketActuelId" | "typeSession" | "baseTarifHoraire" | "tempsDebut" | "tempsFin" | "montantDu" | "sourceMiseAJour" | "updatedAt", ExtArgs["result"]["sessionOrdinateur"]>
  export type SessionOrdinateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }
  export type SessionOrdinateurIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }
  export type SessionOrdinateurIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    ticketActuel?: boolean | SessionOrdinateur$ticketActuelArgs<ExtArgs>
  }

  export type $SessionOrdinateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SessionOrdinateur"
    objects: {
      cyber: Prisma.$CyberPayload<ExtArgs>
      ticketActuel: Prisma.$TicketPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cyberId: string
      numeroPoste: number
      statut: $Enums.StatutPoste
      ticketActuelId: string | null
      typeSession: $Enums.TypeSession | null
      baseTarifHoraire: Prisma.Decimal
      tempsDebut: Date | null
      tempsFin: Date | null
      montantDu: Prisma.Decimal | null
      sourceMiseAJour: $Enums.SourceMiseAJour
      updatedAt: Date
    }, ExtArgs["result"]["sessionOrdinateur"]>
    composites: {}
  }

  type SessionOrdinateurGetPayload<S extends boolean | null | undefined | SessionOrdinateurDefaultArgs> = $Result.GetResult<Prisma.$SessionOrdinateurPayload, S>

  type SessionOrdinateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionOrdinateurFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionOrdinateurCountAggregateInputType | true
    }

  export interface SessionOrdinateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SessionOrdinateur'], meta: { name: 'SessionOrdinateur' } }
    /**
     * Find zero or one SessionOrdinateur that matches the filter.
     * @param {SessionOrdinateurFindUniqueArgs} args - Arguments to find a SessionOrdinateur
     * @example
     * // Get one SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionOrdinateurFindUniqueArgs>(args: SelectSubset<T, SessionOrdinateurFindUniqueArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SessionOrdinateur that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionOrdinateurFindUniqueOrThrowArgs} args - Arguments to find a SessionOrdinateur
     * @example
     * // Get one SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionOrdinateurFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionOrdinateurFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionOrdinateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurFindFirstArgs} args - Arguments to find a SessionOrdinateur
     * @example
     * // Get one SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionOrdinateurFindFirstArgs>(args?: SelectSubset<T, SessionOrdinateurFindFirstArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SessionOrdinateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurFindFirstOrThrowArgs} args - Arguments to find a SessionOrdinateur
     * @example
     * // Get one SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionOrdinateurFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionOrdinateurFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SessionOrdinateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SessionOrdinateurs
     * const sessionOrdinateurs = await prisma.sessionOrdinateur.findMany()
     * 
     * // Get first 10 SessionOrdinateurs
     * const sessionOrdinateurs = await prisma.sessionOrdinateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionOrdinateurWithIdOnly = await prisma.sessionOrdinateur.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionOrdinateurFindManyArgs>(args?: SelectSubset<T, SessionOrdinateurFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SessionOrdinateur.
     * @param {SessionOrdinateurCreateArgs} args - Arguments to create a SessionOrdinateur.
     * @example
     * // Create one SessionOrdinateur
     * const SessionOrdinateur = await prisma.sessionOrdinateur.create({
     *   data: {
     *     // ... data to create a SessionOrdinateur
     *   }
     * })
     * 
     */
    create<T extends SessionOrdinateurCreateArgs>(args: SelectSubset<T, SessionOrdinateurCreateArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SessionOrdinateurs.
     * @param {SessionOrdinateurCreateManyArgs} args - Arguments to create many SessionOrdinateurs.
     * @example
     * // Create many SessionOrdinateurs
     * const sessionOrdinateur = await prisma.sessionOrdinateur.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionOrdinateurCreateManyArgs>(args?: SelectSubset<T, SessionOrdinateurCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SessionOrdinateurs and returns the data saved in the database.
     * @param {SessionOrdinateurCreateManyAndReturnArgs} args - Arguments to create many SessionOrdinateurs.
     * @example
     * // Create many SessionOrdinateurs
     * const sessionOrdinateur = await prisma.sessionOrdinateur.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SessionOrdinateurs and only return the `id`
     * const sessionOrdinateurWithIdOnly = await prisma.sessionOrdinateur.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionOrdinateurCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionOrdinateurCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SessionOrdinateur.
     * @param {SessionOrdinateurDeleteArgs} args - Arguments to delete one SessionOrdinateur.
     * @example
     * // Delete one SessionOrdinateur
     * const SessionOrdinateur = await prisma.sessionOrdinateur.delete({
     *   where: {
     *     // ... filter to delete one SessionOrdinateur
     *   }
     * })
     * 
     */
    delete<T extends SessionOrdinateurDeleteArgs>(args: SelectSubset<T, SessionOrdinateurDeleteArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SessionOrdinateur.
     * @param {SessionOrdinateurUpdateArgs} args - Arguments to update one SessionOrdinateur.
     * @example
     * // Update one SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionOrdinateurUpdateArgs>(args: SelectSubset<T, SessionOrdinateurUpdateArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SessionOrdinateurs.
     * @param {SessionOrdinateurDeleteManyArgs} args - Arguments to filter SessionOrdinateurs to delete.
     * @example
     * // Delete a few SessionOrdinateurs
     * const { count } = await prisma.sessionOrdinateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionOrdinateurDeleteManyArgs>(args?: SelectSubset<T, SessionOrdinateurDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionOrdinateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SessionOrdinateurs
     * const sessionOrdinateur = await prisma.sessionOrdinateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionOrdinateurUpdateManyArgs>(args: SelectSubset<T, SessionOrdinateurUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SessionOrdinateurs and returns the data updated in the database.
     * @param {SessionOrdinateurUpdateManyAndReturnArgs} args - Arguments to update many SessionOrdinateurs.
     * @example
     * // Update many SessionOrdinateurs
     * const sessionOrdinateur = await prisma.sessionOrdinateur.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SessionOrdinateurs and only return the `id`
     * const sessionOrdinateurWithIdOnly = await prisma.sessionOrdinateur.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionOrdinateurUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionOrdinateurUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SessionOrdinateur.
     * @param {SessionOrdinateurUpsertArgs} args - Arguments to update or create a SessionOrdinateur.
     * @example
     * // Update or create a SessionOrdinateur
     * const sessionOrdinateur = await prisma.sessionOrdinateur.upsert({
     *   create: {
     *     // ... data to create a SessionOrdinateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SessionOrdinateur we want to update
     *   }
     * })
     */
    upsert<T extends SessionOrdinateurUpsertArgs>(args: SelectSubset<T, SessionOrdinateurUpsertArgs<ExtArgs>>): Prisma__SessionOrdinateurClient<$Result.GetResult<Prisma.$SessionOrdinateurPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SessionOrdinateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurCountArgs} args - Arguments to filter SessionOrdinateurs to count.
     * @example
     * // Count the number of SessionOrdinateurs
     * const count = await prisma.sessionOrdinateur.count({
     *   where: {
     *     // ... the filter for the SessionOrdinateurs we want to count
     *   }
     * })
    **/
    count<T extends SessionOrdinateurCountArgs>(
      args?: Subset<T, SessionOrdinateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionOrdinateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SessionOrdinateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionOrdinateurAggregateArgs>(args: Subset<T, SessionOrdinateurAggregateArgs>): Prisma.PrismaPromise<GetSessionOrdinateurAggregateType<T>>

    /**
     * Group by SessionOrdinateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionOrdinateurGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionOrdinateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionOrdinateurGroupByArgs['orderBy'] }
        : { orderBy?: SessionOrdinateurGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionOrdinateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionOrdinateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SessionOrdinateur model
   */
  readonly fields: SessionOrdinateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SessionOrdinateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionOrdinateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticketActuel<T extends SessionOrdinateur$ticketActuelArgs<ExtArgs> = {}>(args?: Subset<T, SessionOrdinateur$ticketActuelArgs<ExtArgs>>): Prisma__TicketClient<$Result.GetResult<Prisma.$TicketPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SessionOrdinateur model
   */
  interface SessionOrdinateurFieldRefs {
    readonly id: FieldRef<"SessionOrdinateur", 'String'>
    readonly cyberId: FieldRef<"SessionOrdinateur", 'String'>
    readonly numeroPoste: FieldRef<"SessionOrdinateur", 'Int'>
    readonly statut: FieldRef<"SessionOrdinateur", 'StatutPoste'>
    readonly ticketActuelId: FieldRef<"SessionOrdinateur", 'String'>
    readonly typeSession: FieldRef<"SessionOrdinateur", 'TypeSession'>
    readonly baseTarifHoraire: FieldRef<"SessionOrdinateur", 'Decimal'>
    readonly tempsDebut: FieldRef<"SessionOrdinateur", 'DateTime'>
    readonly tempsFin: FieldRef<"SessionOrdinateur", 'DateTime'>
    readonly montantDu: FieldRef<"SessionOrdinateur", 'Decimal'>
    readonly sourceMiseAJour: FieldRef<"SessionOrdinateur", 'SourceMiseAJour'>
    readonly updatedAt: FieldRef<"SessionOrdinateur", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SessionOrdinateur findUnique
   */
  export type SessionOrdinateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter, which SessionOrdinateur to fetch.
     */
    where: SessionOrdinateurWhereUniqueInput
  }

  /**
   * SessionOrdinateur findUniqueOrThrow
   */
  export type SessionOrdinateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter, which SessionOrdinateur to fetch.
     */
    where: SessionOrdinateurWhereUniqueInput
  }

  /**
   * SessionOrdinateur findFirst
   */
  export type SessionOrdinateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter, which SessionOrdinateur to fetch.
     */
    where?: SessionOrdinateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionOrdinateurs to fetch.
     */
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionOrdinateurs.
     */
    cursor?: SessionOrdinateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionOrdinateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionOrdinateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionOrdinateurs.
     */
    distinct?: SessionOrdinateurScalarFieldEnum | SessionOrdinateurScalarFieldEnum[]
  }

  /**
   * SessionOrdinateur findFirstOrThrow
   */
  export type SessionOrdinateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter, which SessionOrdinateur to fetch.
     */
    where?: SessionOrdinateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionOrdinateurs to fetch.
     */
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SessionOrdinateurs.
     */
    cursor?: SessionOrdinateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionOrdinateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionOrdinateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SessionOrdinateurs.
     */
    distinct?: SessionOrdinateurScalarFieldEnum | SessionOrdinateurScalarFieldEnum[]
  }

  /**
   * SessionOrdinateur findMany
   */
  export type SessionOrdinateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter, which SessionOrdinateurs to fetch.
     */
    where?: SessionOrdinateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SessionOrdinateurs to fetch.
     */
    orderBy?: SessionOrdinateurOrderByWithRelationInput | SessionOrdinateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SessionOrdinateurs.
     */
    cursor?: SessionOrdinateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SessionOrdinateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SessionOrdinateurs.
     */
    skip?: number
    distinct?: SessionOrdinateurScalarFieldEnum | SessionOrdinateurScalarFieldEnum[]
  }

  /**
   * SessionOrdinateur create
   */
  export type SessionOrdinateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * The data needed to create a SessionOrdinateur.
     */
    data: XOR<SessionOrdinateurCreateInput, SessionOrdinateurUncheckedCreateInput>
  }

  /**
   * SessionOrdinateur createMany
   */
  export type SessionOrdinateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SessionOrdinateurs.
     */
    data: SessionOrdinateurCreateManyInput | SessionOrdinateurCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SessionOrdinateur createManyAndReturn
   */
  export type SessionOrdinateurCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * The data used to create many SessionOrdinateurs.
     */
    data: SessionOrdinateurCreateManyInput | SessionOrdinateurCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionOrdinateur update
   */
  export type SessionOrdinateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * The data needed to update a SessionOrdinateur.
     */
    data: XOR<SessionOrdinateurUpdateInput, SessionOrdinateurUncheckedUpdateInput>
    /**
     * Choose, which SessionOrdinateur to update.
     */
    where: SessionOrdinateurWhereUniqueInput
  }

  /**
   * SessionOrdinateur updateMany
   */
  export type SessionOrdinateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SessionOrdinateurs.
     */
    data: XOR<SessionOrdinateurUpdateManyMutationInput, SessionOrdinateurUncheckedUpdateManyInput>
    /**
     * Filter which SessionOrdinateurs to update
     */
    where?: SessionOrdinateurWhereInput
    /**
     * Limit how many SessionOrdinateurs to update.
     */
    limit?: number
  }

  /**
   * SessionOrdinateur updateManyAndReturn
   */
  export type SessionOrdinateurUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * The data used to update SessionOrdinateurs.
     */
    data: XOR<SessionOrdinateurUpdateManyMutationInput, SessionOrdinateurUncheckedUpdateManyInput>
    /**
     * Filter which SessionOrdinateurs to update
     */
    where?: SessionOrdinateurWhereInput
    /**
     * Limit how many SessionOrdinateurs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SessionOrdinateur upsert
   */
  export type SessionOrdinateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * The filter to search for the SessionOrdinateur to update in case it exists.
     */
    where: SessionOrdinateurWhereUniqueInput
    /**
     * In case the SessionOrdinateur found by the `where` argument doesn't exist, create a new SessionOrdinateur with this data.
     */
    create: XOR<SessionOrdinateurCreateInput, SessionOrdinateurUncheckedCreateInput>
    /**
     * In case the SessionOrdinateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionOrdinateurUpdateInput, SessionOrdinateurUncheckedUpdateInput>
  }

  /**
   * SessionOrdinateur delete
   */
  export type SessionOrdinateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
    /**
     * Filter which SessionOrdinateur to delete.
     */
    where: SessionOrdinateurWhereUniqueInput
  }

  /**
   * SessionOrdinateur deleteMany
   */
  export type SessionOrdinateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SessionOrdinateurs to delete
     */
    where?: SessionOrdinateurWhereInput
    /**
     * Limit how many SessionOrdinateurs to delete.
     */
    limit?: number
  }

  /**
   * SessionOrdinateur.ticketActuel
   */
  export type SessionOrdinateur$ticketActuelArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ticket
     */
    select?: TicketSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Ticket
     */
    omit?: TicketOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TicketInclude<ExtArgs> | null
    where?: TicketWhereInput
  }

  /**
   * SessionOrdinateur without action
   */
  export type SessionOrdinateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SessionOrdinateur
     */
    select?: SessionOrdinateurSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SessionOrdinateur
     */
    omit?: SessionOrdinateurOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionOrdinateurInclude<ExtArgs> | null
  }


  /**
   * Model PostePresence
   */

  export type AggregatePostePresence = {
    _count: PostePresenceCountAggregateOutputType | null
    _avg: PostePresenceAvgAggregateOutputType | null
    _sum: PostePresenceSumAggregateOutputType | null
    _min: PostePresenceMinAggregateOutputType | null
    _max: PostePresenceMaxAggregateOutputType | null
  }

  export type PostePresenceAvgAggregateOutputType = {
    numeroPoste: number | null
  }

  export type PostePresenceSumAggregateOutputType = {
    numeroPoste: number | null
  }

  export type PostePresenceMinAggregateOutputType = {
    id: string | null
    cyberId: string | null
    numeroPoste: number | null
    connected: boolean | null
    lastSeenAt: Date | null
    updatedAt: Date | null
  }

  export type PostePresenceMaxAggregateOutputType = {
    id: string | null
    cyberId: string | null
    numeroPoste: number | null
    connected: boolean | null
    lastSeenAt: Date | null
    updatedAt: Date | null
  }

  export type PostePresenceCountAggregateOutputType = {
    id: number
    cyberId: number
    numeroPoste: number
    connected: number
    lastSeenAt: number
    updatedAt: number
    _all: number
  }


  export type PostePresenceAvgAggregateInputType = {
    numeroPoste?: true
  }

  export type PostePresenceSumAggregateInputType = {
    numeroPoste?: true
  }

  export type PostePresenceMinAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    connected?: true
    lastSeenAt?: true
    updatedAt?: true
  }

  export type PostePresenceMaxAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    connected?: true
    lastSeenAt?: true
    updatedAt?: true
  }

  export type PostePresenceCountAggregateInputType = {
    id?: true
    cyberId?: true
    numeroPoste?: true
    connected?: true
    lastSeenAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PostePresenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostePresence to aggregate.
     */
    where?: PostePresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostePresences to fetch.
     */
    orderBy?: PostePresenceOrderByWithRelationInput | PostePresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostePresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostePresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostePresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostePresences
    **/
    _count?: true | PostePresenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostePresenceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostePresenceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostePresenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostePresenceMaxAggregateInputType
  }

  export type GetPostePresenceAggregateType<T extends PostePresenceAggregateArgs> = {
        [P in keyof T & keyof AggregatePostePresence]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostePresence[P]>
      : GetScalarType<T[P], AggregatePostePresence[P]>
  }




  export type PostePresenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostePresenceWhereInput
    orderBy?: PostePresenceOrderByWithAggregationInput | PostePresenceOrderByWithAggregationInput[]
    by: PostePresenceScalarFieldEnum[] | PostePresenceScalarFieldEnum
    having?: PostePresenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostePresenceCountAggregateInputType | true
    _avg?: PostePresenceAvgAggregateInputType
    _sum?: PostePresenceSumAggregateInputType
    _min?: PostePresenceMinAggregateInputType
    _max?: PostePresenceMaxAggregateInputType
  }

  export type PostePresenceGroupByOutputType = {
    id: string
    cyberId: string
    numeroPoste: number
    connected: boolean
    lastSeenAt: Date
    updatedAt: Date
    _count: PostePresenceCountAggregateOutputType | null
    _avg: PostePresenceAvgAggregateOutputType | null
    _sum: PostePresenceSumAggregateOutputType | null
    _min: PostePresenceMinAggregateOutputType | null
    _max: PostePresenceMaxAggregateOutputType | null
  }

  type GetPostePresenceGroupByPayload<T extends PostePresenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostePresenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostePresenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostePresenceGroupByOutputType[P]>
            : GetScalarType<T[P], PostePresenceGroupByOutputType[P]>
        }
      >
    >


  export type PostePresenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    connected?: boolean
    lastSeenAt?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postePresence"]>

  export type PostePresenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    connected?: boolean
    lastSeenAt?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postePresence"]>

  export type PostePresenceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    connected?: boolean
    lastSeenAt?: boolean
    updatedAt?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postePresence"]>

  export type PostePresenceSelectScalar = {
    id?: boolean
    cyberId?: boolean
    numeroPoste?: boolean
    connected?: boolean
    lastSeenAt?: boolean
    updatedAt?: boolean
  }

  export type PostePresenceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cyberId" | "numeroPoste" | "connected" | "lastSeenAt" | "updatedAt", ExtArgs["result"]["postePresence"]>
  export type PostePresenceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }
  export type PostePresenceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }
  export type PostePresenceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
  }

  export type $PostePresencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostePresence"
    objects: {
      cyber: Prisma.$CyberPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cyberId: string
      numeroPoste: number
      connected: boolean
      lastSeenAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["postePresence"]>
    composites: {}
  }

  type PostePresenceGetPayload<S extends boolean | null | undefined | PostePresenceDefaultArgs> = $Result.GetResult<Prisma.$PostePresencePayload, S>

  type PostePresenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostePresenceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PostePresenceCountAggregateInputType | true
    }

  export interface PostePresenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostePresence'], meta: { name: 'PostePresence' } }
    /**
     * Find zero or one PostePresence that matches the filter.
     * @param {PostePresenceFindUniqueArgs} args - Arguments to find a PostePresence
     * @example
     * // Get one PostePresence
     * const postePresence = await prisma.postePresence.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostePresenceFindUniqueArgs>(args: SelectSubset<T, PostePresenceFindUniqueArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PostePresence that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostePresenceFindUniqueOrThrowArgs} args - Arguments to find a PostePresence
     * @example
     * // Get one PostePresence
     * const postePresence = await prisma.postePresence.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostePresenceFindUniqueOrThrowArgs>(args: SelectSubset<T, PostePresenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostePresence that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceFindFirstArgs} args - Arguments to find a PostePresence
     * @example
     * // Get one PostePresence
     * const postePresence = await prisma.postePresence.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostePresenceFindFirstArgs>(args?: SelectSubset<T, PostePresenceFindFirstArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PostePresence that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceFindFirstOrThrowArgs} args - Arguments to find a PostePresence
     * @example
     * // Get one PostePresence
     * const postePresence = await prisma.postePresence.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostePresenceFindFirstOrThrowArgs>(args?: SelectSubset<T, PostePresenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PostePresences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostePresences
     * const postePresences = await prisma.postePresence.findMany()
     * 
     * // Get first 10 PostePresences
     * const postePresences = await prisma.postePresence.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postePresenceWithIdOnly = await prisma.postePresence.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostePresenceFindManyArgs>(args?: SelectSubset<T, PostePresenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PostePresence.
     * @param {PostePresenceCreateArgs} args - Arguments to create a PostePresence.
     * @example
     * // Create one PostePresence
     * const PostePresence = await prisma.postePresence.create({
     *   data: {
     *     // ... data to create a PostePresence
     *   }
     * })
     * 
     */
    create<T extends PostePresenceCreateArgs>(args: SelectSubset<T, PostePresenceCreateArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PostePresences.
     * @param {PostePresenceCreateManyArgs} args - Arguments to create many PostePresences.
     * @example
     * // Create many PostePresences
     * const postePresence = await prisma.postePresence.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostePresenceCreateManyArgs>(args?: SelectSubset<T, PostePresenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostePresences and returns the data saved in the database.
     * @param {PostePresenceCreateManyAndReturnArgs} args - Arguments to create many PostePresences.
     * @example
     * // Create many PostePresences
     * const postePresence = await prisma.postePresence.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostePresences and only return the `id`
     * const postePresenceWithIdOnly = await prisma.postePresence.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostePresenceCreateManyAndReturnArgs>(args?: SelectSubset<T, PostePresenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PostePresence.
     * @param {PostePresenceDeleteArgs} args - Arguments to delete one PostePresence.
     * @example
     * // Delete one PostePresence
     * const PostePresence = await prisma.postePresence.delete({
     *   where: {
     *     // ... filter to delete one PostePresence
     *   }
     * })
     * 
     */
    delete<T extends PostePresenceDeleteArgs>(args: SelectSubset<T, PostePresenceDeleteArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PostePresence.
     * @param {PostePresenceUpdateArgs} args - Arguments to update one PostePresence.
     * @example
     * // Update one PostePresence
     * const postePresence = await prisma.postePresence.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostePresenceUpdateArgs>(args: SelectSubset<T, PostePresenceUpdateArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PostePresences.
     * @param {PostePresenceDeleteManyArgs} args - Arguments to filter PostePresences to delete.
     * @example
     * // Delete a few PostePresences
     * const { count } = await prisma.postePresence.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostePresenceDeleteManyArgs>(args?: SelectSubset<T, PostePresenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostePresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostePresences
     * const postePresence = await prisma.postePresence.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostePresenceUpdateManyArgs>(args: SelectSubset<T, PostePresenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostePresences and returns the data updated in the database.
     * @param {PostePresenceUpdateManyAndReturnArgs} args - Arguments to update many PostePresences.
     * @example
     * // Update many PostePresences
     * const postePresence = await prisma.postePresence.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostePresences and only return the `id`
     * const postePresenceWithIdOnly = await prisma.postePresence.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostePresenceUpdateManyAndReturnArgs>(args: SelectSubset<T, PostePresenceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PostePresence.
     * @param {PostePresenceUpsertArgs} args - Arguments to update or create a PostePresence.
     * @example
     * // Update or create a PostePresence
     * const postePresence = await prisma.postePresence.upsert({
     *   create: {
     *     // ... data to create a PostePresence
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostePresence we want to update
     *   }
     * })
     */
    upsert<T extends PostePresenceUpsertArgs>(args: SelectSubset<T, PostePresenceUpsertArgs<ExtArgs>>): Prisma__PostePresenceClient<$Result.GetResult<Prisma.$PostePresencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PostePresences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceCountArgs} args - Arguments to filter PostePresences to count.
     * @example
     * // Count the number of PostePresences
     * const count = await prisma.postePresence.count({
     *   where: {
     *     // ... the filter for the PostePresences we want to count
     *   }
     * })
    **/
    count<T extends PostePresenceCountArgs>(
      args?: Subset<T, PostePresenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostePresenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostePresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PostePresenceAggregateArgs>(args: Subset<T, PostePresenceAggregateArgs>): Prisma.PrismaPromise<GetPostePresenceAggregateType<T>>

    /**
     * Group by PostePresence.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostePresenceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PostePresenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostePresenceGroupByArgs['orderBy'] }
        : { orderBy?: PostePresenceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PostePresenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostePresenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostePresence model
   */
  readonly fields: PostePresenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostePresence.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostePresenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostePresence model
   */
  interface PostePresenceFieldRefs {
    readonly id: FieldRef<"PostePresence", 'String'>
    readonly cyberId: FieldRef<"PostePresence", 'String'>
    readonly numeroPoste: FieldRef<"PostePresence", 'Int'>
    readonly connected: FieldRef<"PostePresence", 'Boolean'>
    readonly lastSeenAt: FieldRef<"PostePresence", 'DateTime'>
    readonly updatedAt: FieldRef<"PostePresence", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostePresence findUnique
   */
  export type PostePresenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter, which PostePresence to fetch.
     */
    where: PostePresenceWhereUniqueInput
  }

  /**
   * PostePresence findUniqueOrThrow
   */
  export type PostePresenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter, which PostePresence to fetch.
     */
    where: PostePresenceWhereUniqueInput
  }

  /**
   * PostePresence findFirst
   */
  export type PostePresenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter, which PostePresence to fetch.
     */
    where?: PostePresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostePresences to fetch.
     */
    orderBy?: PostePresenceOrderByWithRelationInput | PostePresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostePresences.
     */
    cursor?: PostePresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostePresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostePresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostePresences.
     */
    distinct?: PostePresenceScalarFieldEnum | PostePresenceScalarFieldEnum[]
  }

  /**
   * PostePresence findFirstOrThrow
   */
  export type PostePresenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter, which PostePresence to fetch.
     */
    where?: PostePresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostePresences to fetch.
     */
    orderBy?: PostePresenceOrderByWithRelationInput | PostePresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostePresences.
     */
    cursor?: PostePresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostePresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostePresences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostePresences.
     */
    distinct?: PostePresenceScalarFieldEnum | PostePresenceScalarFieldEnum[]
  }

  /**
   * PostePresence findMany
   */
  export type PostePresenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter, which PostePresences to fetch.
     */
    where?: PostePresenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostePresences to fetch.
     */
    orderBy?: PostePresenceOrderByWithRelationInput | PostePresenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostePresences.
     */
    cursor?: PostePresenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostePresences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostePresences.
     */
    skip?: number
    distinct?: PostePresenceScalarFieldEnum | PostePresenceScalarFieldEnum[]
  }

  /**
   * PostePresence create
   */
  export type PostePresenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * The data needed to create a PostePresence.
     */
    data: XOR<PostePresenceCreateInput, PostePresenceUncheckedCreateInput>
  }

  /**
   * PostePresence createMany
   */
  export type PostePresenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostePresences.
     */
    data: PostePresenceCreateManyInput | PostePresenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostePresence createManyAndReturn
   */
  export type PostePresenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * The data used to create many PostePresences.
     */
    data: PostePresenceCreateManyInput | PostePresenceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostePresence update
   */
  export type PostePresenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * The data needed to update a PostePresence.
     */
    data: XOR<PostePresenceUpdateInput, PostePresenceUncheckedUpdateInput>
    /**
     * Choose, which PostePresence to update.
     */
    where: PostePresenceWhereUniqueInput
  }

  /**
   * PostePresence updateMany
   */
  export type PostePresenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostePresences.
     */
    data: XOR<PostePresenceUpdateManyMutationInput, PostePresenceUncheckedUpdateManyInput>
    /**
     * Filter which PostePresences to update
     */
    where?: PostePresenceWhereInput
    /**
     * Limit how many PostePresences to update.
     */
    limit?: number
  }

  /**
   * PostePresence updateManyAndReturn
   */
  export type PostePresenceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * The data used to update PostePresences.
     */
    data: XOR<PostePresenceUpdateManyMutationInput, PostePresenceUncheckedUpdateManyInput>
    /**
     * Filter which PostePresences to update
     */
    where?: PostePresenceWhereInput
    /**
     * Limit how many PostePresences to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostePresence upsert
   */
  export type PostePresenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * The filter to search for the PostePresence to update in case it exists.
     */
    where: PostePresenceWhereUniqueInput
    /**
     * In case the PostePresence found by the `where` argument doesn't exist, create a new PostePresence with this data.
     */
    create: XOR<PostePresenceCreateInput, PostePresenceUncheckedCreateInput>
    /**
     * In case the PostePresence was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostePresenceUpdateInput, PostePresenceUncheckedUpdateInput>
  }

  /**
   * PostePresence delete
   */
  export type PostePresenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
    /**
     * Filter which PostePresence to delete.
     */
    where: PostePresenceWhereUniqueInput
  }

  /**
   * PostePresence deleteMany
   */
  export type PostePresenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostePresences to delete
     */
    where?: PostePresenceWhereInput
    /**
     * Limit how many PostePresences to delete.
     */
    limit?: number
  }

  /**
   * PostePresence without action
   */
  export type PostePresenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostePresence
     */
    select?: PostePresenceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PostePresence
     */
    omit?: PostePresenceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostePresenceInclude<ExtArgs> | null
  }


  /**
   * Model TransactionCaisse
   */

  export type AggregateTransactionCaisse = {
    _count: TransactionCaisseCountAggregateOutputType | null
    _avg: TransactionCaisseAvgAggregateOutputType | null
    _sum: TransactionCaisseSumAggregateOutputType | null
    _min: TransactionCaisseMinAggregateOutputType | null
    _max: TransactionCaisseMaxAggregateOutputType | null
  }

  export type TransactionCaisseAvgAggregateOutputType = {
    montant: Decimal | null
  }

  export type TransactionCaisseSumAggregateOutputType = {
    montant: Decimal | null
  }

  export type TransactionCaisseMinAggregateOutputType = {
    id: string | null
    cyberId: string | null
    montant: Decimal | null
    typePaiement: $Enums.TypePaiement | null
    description: string | null
    dateTransaction: Date | null
    employeId: string | null
  }

  export type TransactionCaisseMaxAggregateOutputType = {
    id: string | null
    cyberId: string | null
    montant: Decimal | null
    typePaiement: $Enums.TypePaiement | null
    description: string | null
    dateTransaction: Date | null
    employeId: string | null
  }

  export type TransactionCaisseCountAggregateOutputType = {
    id: number
    cyberId: number
    montant: number
    typePaiement: number
    description: number
    dateTransaction: number
    employeId: number
    _all: number
  }


  export type TransactionCaisseAvgAggregateInputType = {
    montant?: true
  }

  export type TransactionCaisseSumAggregateInputType = {
    montant?: true
  }

  export type TransactionCaisseMinAggregateInputType = {
    id?: true
    cyberId?: true
    montant?: true
    typePaiement?: true
    description?: true
    dateTransaction?: true
    employeId?: true
  }

  export type TransactionCaisseMaxAggregateInputType = {
    id?: true
    cyberId?: true
    montant?: true
    typePaiement?: true
    description?: true
    dateTransaction?: true
    employeId?: true
  }

  export type TransactionCaisseCountAggregateInputType = {
    id?: true
    cyberId?: true
    montant?: true
    typePaiement?: true
    description?: true
    dateTransaction?: true
    employeId?: true
    _all?: true
  }

  export type TransactionCaisseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionCaisse to aggregate.
     */
    where?: TransactionCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionCaisses to fetch.
     */
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TransactionCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TransactionCaisses
    **/
    _count?: true | TransactionCaisseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TransactionCaisseAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TransactionCaisseSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TransactionCaisseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TransactionCaisseMaxAggregateInputType
  }

  export type GetTransactionCaisseAggregateType<T extends TransactionCaisseAggregateArgs> = {
        [P in keyof T & keyof AggregateTransactionCaisse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTransactionCaisse[P]>
      : GetScalarType<T[P], AggregateTransactionCaisse[P]>
  }




  export type TransactionCaisseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TransactionCaisseWhereInput
    orderBy?: TransactionCaisseOrderByWithAggregationInput | TransactionCaisseOrderByWithAggregationInput[]
    by: TransactionCaisseScalarFieldEnum[] | TransactionCaisseScalarFieldEnum
    having?: TransactionCaisseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TransactionCaisseCountAggregateInputType | true
    _avg?: TransactionCaisseAvgAggregateInputType
    _sum?: TransactionCaisseSumAggregateInputType
    _min?: TransactionCaisseMinAggregateInputType
    _max?: TransactionCaisseMaxAggregateInputType
  }

  export type TransactionCaisseGroupByOutputType = {
    id: string
    cyberId: string
    montant: Decimal
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction: Date
    employeId: string
    _count: TransactionCaisseCountAggregateOutputType | null
    _avg: TransactionCaisseAvgAggregateOutputType | null
    _sum: TransactionCaisseSumAggregateOutputType | null
    _min: TransactionCaisseMinAggregateOutputType | null
    _max: TransactionCaisseMaxAggregateOutputType | null
  }

  type GetTransactionCaisseGroupByPayload<T extends TransactionCaisseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TransactionCaisseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TransactionCaisseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TransactionCaisseGroupByOutputType[P]>
            : GetScalarType<T[P], TransactionCaisseGroupByOutputType[P]>
        }
      >
    >


  export type TransactionCaisseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    montant?: boolean
    typePaiement?: boolean
    description?: boolean
    dateTransaction?: boolean
    employeId?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionCaisse"]>

  export type TransactionCaisseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    montant?: boolean
    typePaiement?: boolean
    description?: boolean
    dateTransaction?: boolean
    employeId?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionCaisse"]>

  export type TransactionCaisseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cyberId?: boolean
    montant?: boolean
    typePaiement?: boolean
    description?: boolean
    dateTransaction?: boolean
    employeId?: boolean
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["transactionCaisse"]>

  export type TransactionCaisseSelectScalar = {
    id?: boolean
    cyberId?: boolean
    montant?: boolean
    typePaiement?: boolean
    description?: boolean
    dateTransaction?: boolean
    employeId?: boolean
  }

  export type TransactionCaisseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cyberId" | "montant" | "typePaiement" | "description" | "dateTransaction" | "employeId", ExtArgs["result"]["transactionCaisse"]>
  export type TransactionCaisseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionCaisseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TransactionCaisseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cyber?: boolean | CyberDefaultArgs<ExtArgs>
    employe?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TransactionCaissePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TransactionCaisse"
    objects: {
      cyber: Prisma.$CyberPayload<ExtArgs>
      employe: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      cyberId: string
      montant: Prisma.Decimal
      typePaiement: $Enums.TypePaiement
      description: string
      dateTransaction: Date
      employeId: string
    }, ExtArgs["result"]["transactionCaisse"]>
    composites: {}
  }

  type TransactionCaisseGetPayload<S extends boolean | null | undefined | TransactionCaisseDefaultArgs> = $Result.GetResult<Prisma.$TransactionCaissePayload, S>

  type TransactionCaisseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TransactionCaisseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TransactionCaisseCountAggregateInputType | true
    }

  export interface TransactionCaisseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TransactionCaisse'], meta: { name: 'TransactionCaisse' } }
    /**
     * Find zero or one TransactionCaisse that matches the filter.
     * @param {TransactionCaisseFindUniqueArgs} args - Arguments to find a TransactionCaisse
     * @example
     * // Get one TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TransactionCaisseFindUniqueArgs>(args: SelectSubset<T, TransactionCaisseFindUniqueArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TransactionCaisse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TransactionCaisseFindUniqueOrThrowArgs} args - Arguments to find a TransactionCaisse
     * @example
     * // Get one TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TransactionCaisseFindUniqueOrThrowArgs>(args: SelectSubset<T, TransactionCaisseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionCaisse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseFindFirstArgs} args - Arguments to find a TransactionCaisse
     * @example
     * // Get one TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TransactionCaisseFindFirstArgs>(args?: SelectSubset<T, TransactionCaisseFindFirstArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TransactionCaisse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseFindFirstOrThrowArgs} args - Arguments to find a TransactionCaisse
     * @example
     * // Get one TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TransactionCaisseFindFirstOrThrowArgs>(args?: SelectSubset<T, TransactionCaisseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TransactionCaisses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TransactionCaisses
     * const transactionCaisses = await prisma.transactionCaisse.findMany()
     * 
     * // Get first 10 TransactionCaisses
     * const transactionCaisses = await prisma.transactionCaisse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const transactionCaisseWithIdOnly = await prisma.transactionCaisse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TransactionCaisseFindManyArgs>(args?: SelectSubset<T, TransactionCaisseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TransactionCaisse.
     * @param {TransactionCaisseCreateArgs} args - Arguments to create a TransactionCaisse.
     * @example
     * // Create one TransactionCaisse
     * const TransactionCaisse = await prisma.transactionCaisse.create({
     *   data: {
     *     // ... data to create a TransactionCaisse
     *   }
     * })
     * 
     */
    create<T extends TransactionCaisseCreateArgs>(args: SelectSubset<T, TransactionCaisseCreateArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TransactionCaisses.
     * @param {TransactionCaisseCreateManyArgs} args - Arguments to create many TransactionCaisses.
     * @example
     * // Create many TransactionCaisses
     * const transactionCaisse = await prisma.transactionCaisse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TransactionCaisseCreateManyArgs>(args?: SelectSubset<T, TransactionCaisseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TransactionCaisses and returns the data saved in the database.
     * @param {TransactionCaisseCreateManyAndReturnArgs} args - Arguments to create many TransactionCaisses.
     * @example
     * // Create many TransactionCaisses
     * const transactionCaisse = await prisma.transactionCaisse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TransactionCaisses and only return the `id`
     * const transactionCaisseWithIdOnly = await prisma.transactionCaisse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TransactionCaisseCreateManyAndReturnArgs>(args?: SelectSubset<T, TransactionCaisseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TransactionCaisse.
     * @param {TransactionCaisseDeleteArgs} args - Arguments to delete one TransactionCaisse.
     * @example
     * // Delete one TransactionCaisse
     * const TransactionCaisse = await prisma.transactionCaisse.delete({
     *   where: {
     *     // ... filter to delete one TransactionCaisse
     *   }
     * })
     * 
     */
    delete<T extends TransactionCaisseDeleteArgs>(args: SelectSubset<T, TransactionCaisseDeleteArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TransactionCaisse.
     * @param {TransactionCaisseUpdateArgs} args - Arguments to update one TransactionCaisse.
     * @example
     * // Update one TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TransactionCaisseUpdateArgs>(args: SelectSubset<T, TransactionCaisseUpdateArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TransactionCaisses.
     * @param {TransactionCaisseDeleteManyArgs} args - Arguments to filter TransactionCaisses to delete.
     * @example
     * // Delete a few TransactionCaisses
     * const { count } = await prisma.transactionCaisse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TransactionCaisseDeleteManyArgs>(args?: SelectSubset<T, TransactionCaisseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TransactionCaisses
     * const transactionCaisse = await prisma.transactionCaisse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TransactionCaisseUpdateManyArgs>(args: SelectSubset<T, TransactionCaisseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TransactionCaisses and returns the data updated in the database.
     * @param {TransactionCaisseUpdateManyAndReturnArgs} args - Arguments to update many TransactionCaisses.
     * @example
     * // Update many TransactionCaisses
     * const transactionCaisse = await prisma.transactionCaisse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TransactionCaisses and only return the `id`
     * const transactionCaisseWithIdOnly = await prisma.transactionCaisse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TransactionCaisseUpdateManyAndReturnArgs>(args: SelectSubset<T, TransactionCaisseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TransactionCaisse.
     * @param {TransactionCaisseUpsertArgs} args - Arguments to update or create a TransactionCaisse.
     * @example
     * // Update or create a TransactionCaisse
     * const transactionCaisse = await prisma.transactionCaisse.upsert({
     *   create: {
     *     // ... data to create a TransactionCaisse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TransactionCaisse we want to update
     *   }
     * })
     */
    upsert<T extends TransactionCaisseUpsertArgs>(args: SelectSubset<T, TransactionCaisseUpsertArgs<ExtArgs>>): Prisma__TransactionCaisseClient<$Result.GetResult<Prisma.$TransactionCaissePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TransactionCaisses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseCountArgs} args - Arguments to filter TransactionCaisses to count.
     * @example
     * // Count the number of TransactionCaisses
     * const count = await prisma.transactionCaisse.count({
     *   where: {
     *     // ... the filter for the TransactionCaisses we want to count
     *   }
     * })
    **/
    count<T extends TransactionCaisseCountArgs>(
      args?: Subset<T, TransactionCaisseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TransactionCaisseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TransactionCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TransactionCaisseAggregateArgs>(args: Subset<T, TransactionCaisseAggregateArgs>): Prisma.PrismaPromise<GetTransactionCaisseAggregateType<T>>

    /**
     * Group by TransactionCaisse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TransactionCaisseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TransactionCaisseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TransactionCaisseGroupByArgs['orderBy'] }
        : { orderBy?: TransactionCaisseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TransactionCaisseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTransactionCaisseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TransactionCaisse model
   */
  readonly fields: TransactionCaisseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TransactionCaisse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TransactionCaisseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cyber<T extends CyberDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CyberDefaultArgs<ExtArgs>>): Prisma__CyberClient<$Result.GetResult<Prisma.$CyberPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employe<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TransactionCaisse model
   */
  interface TransactionCaisseFieldRefs {
    readonly id: FieldRef<"TransactionCaisse", 'String'>
    readonly cyberId: FieldRef<"TransactionCaisse", 'String'>
    readonly montant: FieldRef<"TransactionCaisse", 'Decimal'>
    readonly typePaiement: FieldRef<"TransactionCaisse", 'TypePaiement'>
    readonly description: FieldRef<"TransactionCaisse", 'String'>
    readonly dateTransaction: FieldRef<"TransactionCaisse", 'DateTime'>
    readonly employeId: FieldRef<"TransactionCaisse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * TransactionCaisse findUnique
   */
  export type TransactionCaisseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter, which TransactionCaisse to fetch.
     */
    where: TransactionCaisseWhereUniqueInput
  }

  /**
   * TransactionCaisse findUniqueOrThrow
   */
  export type TransactionCaisseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter, which TransactionCaisse to fetch.
     */
    where: TransactionCaisseWhereUniqueInput
  }

  /**
   * TransactionCaisse findFirst
   */
  export type TransactionCaisseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter, which TransactionCaisse to fetch.
     */
    where?: TransactionCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionCaisses to fetch.
     */
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionCaisses.
     */
    cursor?: TransactionCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionCaisses.
     */
    distinct?: TransactionCaisseScalarFieldEnum | TransactionCaisseScalarFieldEnum[]
  }

  /**
   * TransactionCaisse findFirstOrThrow
   */
  export type TransactionCaisseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter, which TransactionCaisse to fetch.
     */
    where?: TransactionCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionCaisses to fetch.
     */
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TransactionCaisses.
     */
    cursor?: TransactionCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionCaisses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TransactionCaisses.
     */
    distinct?: TransactionCaisseScalarFieldEnum | TransactionCaisseScalarFieldEnum[]
  }

  /**
   * TransactionCaisse findMany
   */
  export type TransactionCaisseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter, which TransactionCaisses to fetch.
     */
    where?: TransactionCaisseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TransactionCaisses to fetch.
     */
    orderBy?: TransactionCaisseOrderByWithRelationInput | TransactionCaisseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TransactionCaisses.
     */
    cursor?: TransactionCaisseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TransactionCaisses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TransactionCaisses.
     */
    skip?: number
    distinct?: TransactionCaisseScalarFieldEnum | TransactionCaisseScalarFieldEnum[]
  }

  /**
   * TransactionCaisse create
   */
  export type TransactionCaisseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * The data needed to create a TransactionCaisse.
     */
    data: XOR<TransactionCaisseCreateInput, TransactionCaisseUncheckedCreateInput>
  }

  /**
   * TransactionCaisse createMany
   */
  export type TransactionCaisseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TransactionCaisses.
     */
    data: TransactionCaisseCreateManyInput | TransactionCaisseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TransactionCaisse createManyAndReturn
   */
  export type TransactionCaisseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * The data used to create many TransactionCaisses.
     */
    data: TransactionCaisseCreateManyInput | TransactionCaisseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionCaisse update
   */
  export type TransactionCaisseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * The data needed to update a TransactionCaisse.
     */
    data: XOR<TransactionCaisseUpdateInput, TransactionCaisseUncheckedUpdateInput>
    /**
     * Choose, which TransactionCaisse to update.
     */
    where: TransactionCaisseWhereUniqueInput
  }

  /**
   * TransactionCaisse updateMany
   */
  export type TransactionCaisseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TransactionCaisses.
     */
    data: XOR<TransactionCaisseUpdateManyMutationInput, TransactionCaisseUncheckedUpdateManyInput>
    /**
     * Filter which TransactionCaisses to update
     */
    where?: TransactionCaisseWhereInput
    /**
     * Limit how many TransactionCaisses to update.
     */
    limit?: number
  }

  /**
   * TransactionCaisse updateManyAndReturn
   */
  export type TransactionCaisseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * The data used to update TransactionCaisses.
     */
    data: XOR<TransactionCaisseUpdateManyMutationInput, TransactionCaisseUncheckedUpdateManyInput>
    /**
     * Filter which TransactionCaisses to update
     */
    where?: TransactionCaisseWhereInput
    /**
     * Limit how many TransactionCaisses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TransactionCaisse upsert
   */
  export type TransactionCaisseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * The filter to search for the TransactionCaisse to update in case it exists.
     */
    where: TransactionCaisseWhereUniqueInput
    /**
     * In case the TransactionCaisse found by the `where` argument doesn't exist, create a new TransactionCaisse with this data.
     */
    create: XOR<TransactionCaisseCreateInput, TransactionCaisseUncheckedCreateInput>
    /**
     * In case the TransactionCaisse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TransactionCaisseUpdateInput, TransactionCaisseUncheckedUpdateInput>
  }

  /**
   * TransactionCaisse delete
   */
  export type TransactionCaisseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
    /**
     * Filter which TransactionCaisse to delete.
     */
    where: TransactionCaisseWhereUniqueInput
  }

  /**
   * TransactionCaisse deleteMany
   */
  export type TransactionCaisseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TransactionCaisses to delete
     */
    where?: TransactionCaisseWhereInput
    /**
     * Limit how many TransactionCaisses to delete.
     */
    limit?: number
  }

  /**
   * TransactionCaisse without action
   */
  export type TransactionCaisseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TransactionCaisse
     */
    select?: TransactionCaisseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TransactionCaisse
     */
    omit?: TransactionCaisseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TransactionCaisseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CyberScalarFieldEnum: {
    id: 'id',
    nom: 'nom',
    nombrePostes: 'nombrePostes',
    dureesTicket: 'dureesTicket',
    prixParMinute: 'prixParMinute',
    isActive: 'isActive',
    archivedAt: 'archivedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CyberScalarFieldEnum = (typeof CyberScalarFieldEnum)[keyof typeof CyberScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    supabaseUserId: 'supabaseUserId',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const UserCyberScalarFieldEnum: {
    userId: 'userId',
    cyberId: 'cyberId',
    assignedAt: 'assignedAt'
  };

  export type UserCyberScalarFieldEnum = (typeof UserCyberScalarFieldEnum)[keyof typeof UserCyberScalarFieldEnum]


  export const FideliteConfigScalarFieldEnum: {
    id: 'id',
    pointsParMinuteAchat: 'pointsParMinuteAchat',
    pointsPourMinuteGratuite: 'pointsPourMinuteGratuite',
    pointsPour100Ar: 'pointsPour100Ar',
    actif: 'actif',
    updatedAt: 'updatedAt'
  };

  export type FideliteConfigScalarFieldEnum = (typeof FideliteConfigScalarFieldEnum)[keyof typeof FideliteConfigScalarFieldEnum]


  export const ClientFideliteScalarFieldEnum: {
    id: 'id',
    telephone: 'telephone',
    nom: 'nom',
    isActive: 'isActive',
    createdAt: 'createdAt'
  };

  export type ClientFideliteScalarFieldEnum = (typeof ClientFideliteScalarFieldEnum)[keyof typeof ClientFideliteScalarFieldEnum]


  export const MouvementFideliteScalarFieldEnum: {
    id: 'id',
    cyberId: 'cyberId',
    clientId: 'clientId',
    type: 'type',
    points: 'points',
    ticketId: 'ticketId',
    employeId: 'employeId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type MouvementFideliteScalarFieldEnum = (typeof MouvementFideliteScalarFieldEnum)[keyof typeof MouvementFideliteScalarFieldEnum]


  export const TicketScalarFieldEnum: {
    id: 'id',
    cyberId: 'cyberId',
    codeUnique: 'codeUnique',
    tempsInitial: 'tempsInitial',
    tempsRestant: 'tempsRestant',
    statut: 'statut',
    creeParId: 'creeParId',
    clientFideliteId: 'clientFideliteId',
    pointsGagnes: 'pointsGagnes',
    pointsUtilises: 'pointsUtilises',
    minutesBonus: 'minutesBonus',
    reductionAr: 'reductionAr',
    createdAt: 'createdAt'
  };

  export type TicketScalarFieldEnum = (typeof TicketScalarFieldEnum)[keyof typeof TicketScalarFieldEnum]


  export const SessionOrdinateurScalarFieldEnum: {
    id: 'id',
    cyberId: 'cyberId',
    numeroPoste: 'numeroPoste',
    statut: 'statut',
    ticketActuelId: 'ticketActuelId',
    typeSession: 'typeSession',
    baseTarifHoraire: 'baseTarifHoraire',
    tempsDebut: 'tempsDebut',
    tempsFin: 'tempsFin',
    montantDu: 'montantDu',
    sourceMiseAJour: 'sourceMiseAJour',
    updatedAt: 'updatedAt'
  };

  export type SessionOrdinateurScalarFieldEnum = (typeof SessionOrdinateurScalarFieldEnum)[keyof typeof SessionOrdinateurScalarFieldEnum]


  export const PostePresenceScalarFieldEnum: {
    id: 'id',
    cyberId: 'cyberId',
    numeroPoste: 'numeroPoste',
    connected: 'connected',
    lastSeenAt: 'lastSeenAt',
    updatedAt: 'updatedAt'
  };

  export type PostePresenceScalarFieldEnum = (typeof PostePresenceScalarFieldEnum)[keyof typeof PostePresenceScalarFieldEnum]


  export const TransactionCaisseScalarFieldEnum: {
    id: 'id',
    cyberId: 'cyberId',
    montant: 'montant',
    typePaiement: 'typePaiement',
    description: 'description',
    dateTransaction: 'dateTransaction',
    employeId: 'employeId'
  };

  export type TransactionCaisseScalarFieldEnum = (typeof TransactionCaisseScalarFieldEnum)[keyof typeof TransactionCaisseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'TypeMouvementFidelite'
   */
  export type EnumTypeMouvementFideliteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeMouvementFidelite'>
    


  /**
   * Reference to a field of type 'TypeMouvementFidelite[]'
   */
  export type ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeMouvementFidelite[]'>
    


  /**
   * Reference to a field of type 'StatutTicket'
   */
  export type EnumStatutTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTicket'>
    


  /**
   * Reference to a field of type 'StatutTicket[]'
   */
  export type ListEnumStatutTicketFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutTicket[]'>
    


  /**
   * Reference to a field of type 'StatutPoste'
   */
  export type EnumStatutPosteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPoste'>
    


  /**
   * Reference to a field of type 'StatutPoste[]'
   */
  export type ListEnumStatutPosteFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StatutPoste[]'>
    


  /**
   * Reference to a field of type 'TypeSession'
   */
  export type EnumTypeSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeSession'>
    


  /**
   * Reference to a field of type 'TypeSession[]'
   */
  export type ListEnumTypeSessionFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypeSession[]'>
    


  /**
   * Reference to a field of type 'SourceMiseAJour'
   */
  export type EnumSourceMiseAJourFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceMiseAJour'>
    


  /**
   * Reference to a field of type 'SourceMiseAJour[]'
   */
  export type ListEnumSourceMiseAJourFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SourceMiseAJour[]'>
    


  /**
   * Reference to a field of type 'TypePaiement'
   */
  export type EnumTypePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePaiement'>
    


  /**
   * Reference to a field of type 'TypePaiement[]'
   */
  export type ListEnumTypePaiementFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TypePaiement[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type CyberWhereInput = {
    AND?: CyberWhereInput | CyberWhereInput[]
    OR?: CyberWhereInput[]
    NOT?: CyberWhereInput | CyberWhereInput[]
    id?: StringFilter<"Cyber"> | string
    nom?: StringFilter<"Cyber"> | string
    nombrePostes?: IntFilter<"Cyber"> | number
    dureesTicket?: IntNullableListFilter<"Cyber">
    prixParMinute?: DecimalFilter<"Cyber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Cyber"> | boolean
    archivedAt?: DateTimeNullableFilter<"Cyber"> | Date | string | null
    createdAt?: DateTimeFilter<"Cyber"> | Date | string
    updatedAt?: DateTimeFilter<"Cyber"> | Date | string
    staffAssignments?: UserCyberListRelationFilter
    tickets?: TicketListRelationFilter
    sessions?: SessionOrdinateurListRelationFilter
    postePresences?: PostePresenceListRelationFilter
    transactions?: TransactionCaisseListRelationFilter
    mouvementsFidelite?: MouvementFideliteListRelationFilter
  }

  export type CyberOrderByWithRelationInput = {
    id?: SortOrder
    nom?: SortOrder
    nombrePostes?: SortOrder
    dureesTicket?: SortOrder
    prixParMinute?: SortOrder
    isActive?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    staffAssignments?: UserCyberOrderByRelationAggregateInput
    tickets?: TicketOrderByRelationAggregateInput
    sessions?: SessionOrdinateurOrderByRelationAggregateInput
    postePresences?: PostePresenceOrderByRelationAggregateInput
    transactions?: TransactionCaisseOrderByRelationAggregateInput
    mouvementsFidelite?: MouvementFideliteOrderByRelationAggregateInput
  }

  export type CyberWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CyberWhereInput | CyberWhereInput[]
    OR?: CyberWhereInput[]
    NOT?: CyberWhereInput | CyberWhereInput[]
    nom?: StringFilter<"Cyber"> | string
    nombrePostes?: IntFilter<"Cyber"> | number
    dureesTicket?: IntNullableListFilter<"Cyber">
    prixParMinute?: DecimalFilter<"Cyber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolFilter<"Cyber"> | boolean
    archivedAt?: DateTimeNullableFilter<"Cyber"> | Date | string | null
    createdAt?: DateTimeFilter<"Cyber"> | Date | string
    updatedAt?: DateTimeFilter<"Cyber"> | Date | string
    staffAssignments?: UserCyberListRelationFilter
    tickets?: TicketListRelationFilter
    sessions?: SessionOrdinateurListRelationFilter
    postePresences?: PostePresenceListRelationFilter
    transactions?: TransactionCaisseListRelationFilter
    mouvementsFidelite?: MouvementFideliteListRelationFilter
  }, "id">

  export type CyberOrderByWithAggregationInput = {
    id?: SortOrder
    nom?: SortOrder
    nombrePostes?: SortOrder
    dureesTicket?: SortOrder
    prixParMinute?: SortOrder
    isActive?: SortOrder
    archivedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CyberCountOrderByAggregateInput
    _avg?: CyberAvgOrderByAggregateInput
    _max?: CyberMaxOrderByAggregateInput
    _min?: CyberMinOrderByAggregateInput
    _sum?: CyberSumOrderByAggregateInput
  }

  export type CyberScalarWhereWithAggregatesInput = {
    AND?: CyberScalarWhereWithAggregatesInput | CyberScalarWhereWithAggregatesInput[]
    OR?: CyberScalarWhereWithAggregatesInput[]
    NOT?: CyberScalarWhereWithAggregatesInput | CyberScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Cyber"> | string
    nom?: StringWithAggregatesFilter<"Cyber"> | string
    nombrePostes?: IntWithAggregatesFilter<"Cyber"> | number
    dureesTicket?: IntNullableListFilter<"Cyber">
    prixParMinute?: DecimalWithAggregatesFilter<"Cyber"> | Decimal | DecimalJsLike | number | string
    isActive?: BoolWithAggregatesFilter<"Cyber"> | boolean
    archivedAt?: DateTimeNullableWithAggregatesFilter<"Cyber"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Cyber"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Cyber"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    supabaseUserId?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    cybers?: UserCyberListRelationFilter
    ticketsCrees?: TicketListRelationFilter
    transactionsCaisse?: TransactionCaisseListRelationFilter
    mouvementsFidelite?: MouvementFideliteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    cybers?: UserCyberOrderByRelationAggregateInput
    ticketsCrees?: TicketOrderByRelationAggregateInput
    transactionsCaisse?: TransactionCaisseOrderByRelationAggregateInput
    mouvementsFidelite?: MouvementFideliteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    username?: string
    email?: string
    supabaseUserId?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    cybers?: UserCyberListRelationFilter
    ticketsCrees?: TicketListRelationFilter
    transactionsCaisse?: TransactionCaisseListRelationFilter
    mouvementsFidelite?: MouvementFideliteListRelationFilter
  }, "id" | "username" | "email" | "supabaseUserId">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrderInput | SortOrder
    supabaseUserId?: SortOrderInput | SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    supabaseUserId?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type UserCyberWhereInput = {
    AND?: UserCyberWhereInput | UserCyberWhereInput[]
    OR?: UserCyberWhereInput[]
    NOT?: UserCyberWhereInput | UserCyberWhereInput[]
    userId?: StringFilter<"UserCyber"> | string
    cyberId?: StringFilter<"UserCyber"> | string
    assignedAt?: DateTimeFilter<"UserCyber"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
  }

  export type UserCyberOrderByWithRelationInput = {
    userId?: SortOrder
    cyberId?: SortOrder
    assignedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    cyber?: CyberOrderByWithRelationInput
  }

  export type UserCyberWhereUniqueInput = Prisma.AtLeast<{
    userId_cyberId?: UserCyberUserIdCyberIdCompoundUniqueInput
    AND?: UserCyberWhereInput | UserCyberWhereInput[]
    OR?: UserCyberWhereInput[]
    NOT?: UserCyberWhereInput | UserCyberWhereInput[]
    userId?: StringFilter<"UserCyber"> | string
    cyberId?: StringFilter<"UserCyber"> | string
    assignedAt?: DateTimeFilter<"UserCyber"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
  }, "userId_cyberId">

  export type UserCyberOrderByWithAggregationInput = {
    userId?: SortOrder
    cyberId?: SortOrder
    assignedAt?: SortOrder
    _count?: UserCyberCountOrderByAggregateInput
    _max?: UserCyberMaxOrderByAggregateInput
    _min?: UserCyberMinOrderByAggregateInput
  }

  export type UserCyberScalarWhereWithAggregatesInput = {
    AND?: UserCyberScalarWhereWithAggregatesInput | UserCyberScalarWhereWithAggregatesInput[]
    OR?: UserCyberScalarWhereWithAggregatesInput[]
    NOT?: UserCyberScalarWhereWithAggregatesInput | UserCyberScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"UserCyber"> | string
    cyberId?: StringWithAggregatesFilter<"UserCyber"> | string
    assignedAt?: DateTimeWithAggregatesFilter<"UserCyber"> | Date | string
  }

  export type FideliteConfigWhereInput = {
    AND?: FideliteConfigWhereInput | FideliteConfigWhereInput[]
    OR?: FideliteConfigWhereInput[]
    NOT?: FideliteConfigWhereInput | FideliteConfigWhereInput[]
    id?: StringFilter<"FideliteConfig"> | string
    pointsParMinuteAchat?: IntFilter<"FideliteConfig"> | number
    pointsPourMinuteGratuite?: IntFilter<"FideliteConfig"> | number
    pointsPour100Ar?: IntFilter<"FideliteConfig"> | number
    actif?: BoolFilter<"FideliteConfig"> | boolean
    updatedAt?: DateTimeFilter<"FideliteConfig"> | Date | string
  }

  export type FideliteConfigOrderByWithRelationInput = {
    id?: SortOrder
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
    actif?: SortOrder
    updatedAt?: SortOrder
  }

  export type FideliteConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FideliteConfigWhereInput | FideliteConfigWhereInput[]
    OR?: FideliteConfigWhereInput[]
    NOT?: FideliteConfigWhereInput | FideliteConfigWhereInput[]
    pointsParMinuteAchat?: IntFilter<"FideliteConfig"> | number
    pointsPourMinuteGratuite?: IntFilter<"FideliteConfig"> | number
    pointsPour100Ar?: IntFilter<"FideliteConfig"> | number
    actif?: BoolFilter<"FideliteConfig"> | boolean
    updatedAt?: DateTimeFilter<"FideliteConfig"> | Date | string
  }, "id">

  export type FideliteConfigOrderByWithAggregationInput = {
    id?: SortOrder
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
    actif?: SortOrder
    updatedAt?: SortOrder
    _count?: FideliteConfigCountOrderByAggregateInput
    _avg?: FideliteConfigAvgOrderByAggregateInput
    _max?: FideliteConfigMaxOrderByAggregateInput
    _min?: FideliteConfigMinOrderByAggregateInput
    _sum?: FideliteConfigSumOrderByAggregateInput
  }

  export type FideliteConfigScalarWhereWithAggregatesInput = {
    AND?: FideliteConfigScalarWhereWithAggregatesInput | FideliteConfigScalarWhereWithAggregatesInput[]
    OR?: FideliteConfigScalarWhereWithAggregatesInput[]
    NOT?: FideliteConfigScalarWhereWithAggregatesInput | FideliteConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FideliteConfig"> | string
    pointsParMinuteAchat?: IntWithAggregatesFilter<"FideliteConfig"> | number
    pointsPourMinuteGratuite?: IntWithAggregatesFilter<"FideliteConfig"> | number
    pointsPour100Ar?: IntWithAggregatesFilter<"FideliteConfig"> | number
    actif?: BoolWithAggregatesFilter<"FideliteConfig"> | boolean
    updatedAt?: DateTimeWithAggregatesFilter<"FideliteConfig"> | Date | string
  }

  export type ClientFideliteWhereInput = {
    AND?: ClientFideliteWhereInput | ClientFideliteWhereInput[]
    OR?: ClientFideliteWhereInput[]
    NOT?: ClientFideliteWhereInput | ClientFideliteWhereInput[]
    id?: StringFilter<"ClientFidelite"> | string
    telephone?: StringFilter<"ClientFidelite"> | string
    nom?: StringNullableFilter<"ClientFidelite"> | string | null
    isActive?: BoolFilter<"ClientFidelite"> | boolean
    createdAt?: DateTimeFilter<"ClientFidelite"> | Date | string
    tickets?: TicketListRelationFilter
    mouvements?: MouvementFideliteListRelationFilter
  }

  export type ClientFideliteOrderByWithRelationInput = {
    id?: SortOrder
    telephone?: SortOrder
    nom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    tickets?: TicketOrderByRelationAggregateInput
    mouvements?: MouvementFideliteOrderByRelationAggregateInput
  }

  export type ClientFideliteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    telephone?: string
    AND?: ClientFideliteWhereInput | ClientFideliteWhereInput[]
    OR?: ClientFideliteWhereInput[]
    NOT?: ClientFideliteWhereInput | ClientFideliteWhereInput[]
    nom?: StringNullableFilter<"ClientFidelite"> | string | null
    isActive?: BoolFilter<"ClientFidelite"> | boolean
    createdAt?: DateTimeFilter<"ClientFidelite"> | Date | string
    tickets?: TicketListRelationFilter
    mouvements?: MouvementFideliteListRelationFilter
  }, "id" | "telephone">

  export type ClientFideliteOrderByWithAggregationInput = {
    id?: SortOrder
    telephone?: SortOrder
    nom?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    _count?: ClientFideliteCountOrderByAggregateInput
    _max?: ClientFideliteMaxOrderByAggregateInput
    _min?: ClientFideliteMinOrderByAggregateInput
  }

  export type ClientFideliteScalarWhereWithAggregatesInput = {
    AND?: ClientFideliteScalarWhereWithAggregatesInput | ClientFideliteScalarWhereWithAggregatesInput[]
    OR?: ClientFideliteScalarWhereWithAggregatesInput[]
    NOT?: ClientFideliteScalarWhereWithAggregatesInput | ClientFideliteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientFidelite"> | string
    telephone?: StringWithAggregatesFilter<"ClientFidelite"> | string
    nom?: StringNullableWithAggregatesFilter<"ClientFidelite"> | string | null
    isActive?: BoolWithAggregatesFilter<"ClientFidelite"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ClientFidelite"> | Date | string
  }

  export type MouvementFideliteWhereInput = {
    AND?: MouvementFideliteWhereInput | MouvementFideliteWhereInput[]
    OR?: MouvementFideliteWhereInput[]
    NOT?: MouvementFideliteWhereInput | MouvementFideliteWhereInput[]
    id?: StringFilter<"MouvementFidelite"> | string
    cyberId?: StringFilter<"MouvementFidelite"> | string
    clientId?: StringFilter<"MouvementFidelite"> | string
    type?: EnumTypeMouvementFideliteFilter<"MouvementFidelite"> | $Enums.TypeMouvementFidelite
    points?: IntFilter<"MouvementFidelite"> | number
    ticketId?: StringNullableFilter<"MouvementFidelite"> | string | null
    employeId?: StringFilter<"MouvementFidelite"> | string
    description?: StringFilter<"MouvementFidelite"> | string
    createdAt?: DateTimeFilter<"MouvementFidelite"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    client?: XOR<ClientFideliteScalarRelationFilter, ClientFideliteWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    employe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type MouvementFideliteOrderByWithRelationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    employeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    cyber?: CyberOrderByWithRelationInput
    client?: ClientFideliteOrderByWithRelationInput
    ticket?: TicketOrderByWithRelationInput
    employe?: UserOrderByWithRelationInput
  }

  export type MouvementFideliteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MouvementFideliteWhereInput | MouvementFideliteWhereInput[]
    OR?: MouvementFideliteWhereInput[]
    NOT?: MouvementFideliteWhereInput | MouvementFideliteWhereInput[]
    cyberId?: StringFilter<"MouvementFidelite"> | string
    clientId?: StringFilter<"MouvementFidelite"> | string
    type?: EnumTypeMouvementFideliteFilter<"MouvementFidelite"> | $Enums.TypeMouvementFidelite
    points?: IntFilter<"MouvementFidelite"> | number
    ticketId?: StringNullableFilter<"MouvementFidelite"> | string | null
    employeId?: StringFilter<"MouvementFidelite"> | string
    description?: StringFilter<"MouvementFidelite"> | string
    createdAt?: DateTimeFilter<"MouvementFidelite"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    client?: XOR<ClientFideliteScalarRelationFilter, ClientFideliteWhereInput>
    ticket?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
    employe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type MouvementFideliteOrderByWithAggregationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    ticketId?: SortOrderInput | SortOrder
    employeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: MouvementFideliteCountOrderByAggregateInput
    _avg?: MouvementFideliteAvgOrderByAggregateInput
    _max?: MouvementFideliteMaxOrderByAggregateInput
    _min?: MouvementFideliteMinOrderByAggregateInput
    _sum?: MouvementFideliteSumOrderByAggregateInput
  }

  export type MouvementFideliteScalarWhereWithAggregatesInput = {
    AND?: MouvementFideliteScalarWhereWithAggregatesInput | MouvementFideliteScalarWhereWithAggregatesInput[]
    OR?: MouvementFideliteScalarWhereWithAggregatesInput[]
    NOT?: MouvementFideliteScalarWhereWithAggregatesInput | MouvementFideliteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MouvementFidelite"> | string
    cyberId?: StringWithAggregatesFilter<"MouvementFidelite"> | string
    clientId?: StringWithAggregatesFilter<"MouvementFidelite"> | string
    type?: EnumTypeMouvementFideliteWithAggregatesFilter<"MouvementFidelite"> | $Enums.TypeMouvementFidelite
    points?: IntWithAggregatesFilter<"MouvementFidelite"> | number
    ticketId?: StringNullableWithAggregatesFilter<"MouvementFidelite"> | string | null
    employeId?: StringWithAggregatesFilter<"MouvementFidelite"> | string
    description?: StringWithAggregatesFilter<"MouvementFidelite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"MouvementFidelite"> | Date | string
  }

  export type TicketWhereInput = {
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    id?: StringFilter<"Ticket"> | string
    cyberId?: StringFilter<"Ticket"> | string
    codeUnique?: StringFilter<"Ticket"> | string
    tempsInitial?: IntFilter<"Ticket"> | number
    tempsRestant?: IntFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    creeParId?: StringFilter<"Ticket"> | string
    clientFideliteId?: StringNullableFilter<"Ticket"> | string | null
    pointsGagnes?: IntNullableFilter<"Ticket"> | number | null
    pointsUtilises?: IntNullableFilter<"Ticket"> | number | null
    minutesBonus?: IntFilter<"Ticket"> | number
    reductionAr?: DecimalNullableFilter<"Ticket"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    creePar?: XOR<UserScalarRelationFilter, UserWhereInput>
    clientFidelite?: XOR<ClientFideliteNullableScalarRelationFilter, ClientFideliteWhereInput> | null
    sessions?: SessionOrdinateurListRelationFilter
    mouvements?: MouvementFideliteListRelationFilter
  }

  export type TicketOrderByWithRelationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    codeUnique?: SortOrder
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    statut?: SortOrder
    creeParId?: SortOrder
    clientFideliteId?: SortOrderInput | SortOrder
    pointsGagnes?: SortOrderInput | SortOrder
    pointsUtilises?: SortOrderInput | SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    cyber?: CyberOrderByWithRelationInput
    creePar?: UserOrderByWithRelationInput
    clientFidelite?: ClientFideliteOrderByWithRelationInput
    sessions?: SessionOrdinateurOrderByRelationAggregateInput
    mouvements?: MouvementFideliteOrderByRelationAggregateInput
  }

  export type TicketWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cyberId_codeUnique?: TicketCyberIdCodeUniqueCompoundUniqueInput
    AND?: TicketWhereInput | TicketWhereInput[]
    OR?: TicketWhereInput[]
    NOT?: TicketWhereInput | TicketWhereInput[]
    cyberId?: StringFilter<"Ticket"> | string
    codeUnique?: StringFilter<"Ticket"> | string
    tempsInitial?: IntFilter<"Ticket"> | number
    tempsRestant?: IntFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    creeParId?: StringFilter<"Ticket"> | string
    clientFideliteId?: StringNullableFilter<"Ticket"> | string | null
    pointsGagnes?: IntNullableFilter<"Ticket"> | number | null
    pointsUtilises?: IntNullableFilter<"Ticket"> | number | null
    minutesBonus?: IntFilter<"Ticket"> | number
    reductionAr?: DecimalNullableFilter<"Ticket"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    creePar?: XOR<UserScalarRelationFilter, UserWhereInput>
    clientFidelite?: XOR<ClientFideliteNullableScalarRelationFilter, ClientFideliteWhereInput> | null
    sessions?: SessionOrdinateurListRelationFilter
    mouvements?: MouvementFideliteListRelationFilter
  }, "id" | "cyberId_codeUnique">

  export type TicketOrderByWithAggregationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    codeUnique?: SortOrder
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    statut?: SortOrder
    creeParId?: SortOrder
    clientFideliteId?: SortOrderInput | SortOrder
    pointsGagnes?: SortOrderInput | SortOrder
    pointsUtilises?: SortOrderInput | SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: TicketCountOrderByAggregateInput
    _avg?: TicketAvgOrderByAggregateInput
    _max?: TicketMaxOrderByAggregateInput
    _min?: TicketMinOrderByAggregateInput
    _sum?: TicketSumOrderByAggregateInput
  }

  export type TicketScalarWhereWithAggregatesInput = {
    AND?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    OR?: TicketScalarWhereWithAggregatesInput[]
    NOT?: TicketScalarWhereWithAggregatesInput | TicketScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Ticket"> | string
    cyberId?: StringWithAggregatesFilter<"Ticket"> | string
    codeUnique?: StringWithAggregatesFilter<"Ticket"> | string
    tempsInitial?: IntWithAggregatesFilter<"Ticket"> | number
    tempsRestant?: IntWithAggregatesFilter<"Ticket"> | number
    statut?: EnumStatutTicketWithAggregatesFilter<"Ticket"> | $Enums.StatutTicket
    creeParId?: StringWithAggregatesFilter<"Ticket"> | string
    clientFideliteId?: StringNullableWithAggregatesFilter<"Ticket"> | string | null
    pointsGagnes?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    pointsUtilises?: IntNullableWithAggregatesFilter<"Ticket"> | number | null
    minutesBonus?: IntWithAggregatesFilter<"Ticket"> | number
    reductionAr?: DecimalNullableWithAggregatesFilter<"Ticket"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Ticket"> | Date | string
  }

  export type SessionOrdinateurWhereInput = {
    AND?: SessionOrdinateurWhereInput | SessionOrdinateurWhereInput[]
    OR?: SessionOrdinateurWhereInput[]
    NOT?: SessionOrdinateurWhereInput | SessionOrdinateurWhereInput[]
    id?: StringFilter<"SessionOrdinateur"> | string
    cyberId?: StringFilter<"SessionOrdinateur"> | string
    numeroPoste?: IntFilter<"SessionOrdinateur"> | number
    statut?: EnumStatutPosteFilter<"SessionOrdinateur"> | $Enums.StatutPoste
    ticketActuelId?: StringNullableFilter<"SessionOrdinateur"> | string | null
    typeSession?: EnumTypeSessionNullableFilter<"SessionOrdinateur"> | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string
    tempsDebut?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    tempsFin?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    montantDu?: DecimalNullableFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFilter<"SessionOrdinateur"> | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFilter<"SessionOrdinateur"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    ticketActuel?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }

  export type SessionOrdinateurOrderByWithRelationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    statut?: SortOrder
    ticketActuelId?: SortOrderInput | SortOrder
    typeSession?: SortOrderInput | SortOrder
    baseTarifHoraire?: SortOrder
    tempsDebut?: SortOrderInput | SortOrder
    tempsFin?: SortOrderInput | SortOrder
    montantDu?: SortOrderInput | SortOrder
    sourceMiseAJour?: SortOrder
    updatedAt?: SortOrder
    cyber?: CyberOrderByWithRelationInput
    ticketActuel?: TicketOrderByWithRelationInput
  }

  export type SessionOrdinateurWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cyberId_numeroPoste?: SessionOrdinateurCyberIdNumeroPosteCompoundUniqueInput
    AND?: SessionOrdinateurWhereInput | SessionOrdinateurWhereInput[]
    OR?: SessionOrdinateurWhereInput[]
    NOT?: SessionOrdinateurWhereInput | SessionOrdinateurWhereInput[]
    cyberId?: StringFilter<"SessionOrdinateur"> | string
    numeroPoste?: IntFilter<"SessionOrdinateur"> | number
    statut?: EnumStatutPosteFilter<"SessionOrdinateur"> | $Enums.StatutPoste
    ticketActuelId?: StringNullableFilter<"SessionOrdinateur"> | string | null
    typeSession?: EnumTypeSessionNullableFilter<"SessionOrdinateur"> | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string
    tempsDebut?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    tempsFin?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    montantDu?: DecimalNullableFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFilter<"SessionOrdinateur"> | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFilter<"SessionOrdinateur"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    ticketActuel?: XOR<TicketNullableScalarRelationFilter, TicketWhereInput> | null
  }, "id" | "cyberId_numeroPoste">

  export type SessionOrdinateurOrderByWithAggregationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    statut?: SortOrder
    ticketActuelId?: SortOrderInput | SortOrder
    typeSession?: SortOrderInput | SortOrder
    baseTarifHoraire?: SortOrder
    tempsDebut?: SortOrderInput | SortOrder
    tempsFin?: SortOrderInput | SortOrder
    montantDu?: SortOrderInput | SortOrder
    sourceMiseAJour?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionOrdinateurCountOrderByAggregateInput
    _avg?: SessionOrdinateurAvgOrderByAggregateInput
    _max?: SessionOrdinateurMaxOrderByAggregateInput
    _min?: SessionOrdinateurMinOrderByAggregateInput
    _sum?: SessionOrdinateurSumOrderByAggregateInput
  }

  export type SessionOrdinateurScalarWhereWithAggregatesInput = {
    AND?: SessionOrdinateurScalarWhereWithAggregatesInput | SessionOrdinateurScalarWhereWithAggregatesInput[]
    OR?: SessionOrdinateurScalarWhereWithAggregatesInput[]
    NOT?: SessionOrdinateurScalarWhereWithAggregatesInput | SessionOrdinateurScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SessionOrdinateur"> | string
    cyberId?: StringWithAggregatesFilter<"SessionOrdinateur"> | string
    numeroPoste?: IntWithAggregatesFilter<"SessionOrdinateur"> | number
    statut?: EnumStatutPosteWithAggregatesFilter<"SessionOrdinateur"> | $Enums.StatutPoste
    ticketActuelId?: StringNullableWithAggregatesFilter<"SessionOrdinateur"> | string | null
    typeSession?: EnumTypeSessionNullableWithAggregatesFilter<"SessionOrdinateur"> | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalWithAggregatesFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string
    tempsDebut?: DateTimeNullableWithAggregatesFilter<"SessionOrdinateur"> | Date | string | null
    tempsFin?: DateTimeNullableWithAggregatesFilter<"SessionOrdinateur"> | Date | string | null
    montantDu?: DecimalNullableWithAggregatesFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourWithAggregatesFilter<"SessionOrdinateur"> | $Enums.SourceMiseAJour
    updatedAt?: DateTimeWithAggregatesFilter<"SessionOrdinateur"> | Date | string
  }

  export type PostePresenceWhereInput = {
    AND?: PostePresenceWhereInput | PostePresenceWhereInput[]
    OR?: PostePresenceWhereInput[]
    NOT?: PostePresenceWhereInput | PostePresenceWhereInput[]
    id?: StringFilter<"PostePresence"> | string
    cyberId?: StringFilter<"PostePresence"> | string
    numeroPoste?: IntFilter<"PostePresence"> | number
    connected?: BoolFilter<"PostePresence"> | boolean
    lastSeenAt?: DateTimeFilter<"PostePresence"> | Date | string
    updatedAt?: DateTimeFilter<"PostePresence"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
  }

  export type PostePresenceOrderByWithRelationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    connected?: SortOrder
    lastSeenAt?: SortOrder
    updatedAt?: SortOrder
    cyber?: CyberOrderByWithRelationInput
  }

  export type PostePresenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    cyberId_numeroPoste?: PostePresenceCyberIdNumeroPosteCompoundUniqueInput
    AND?: PostePresenceWhereInput | PostePresenceWhereInput[]
    OR?: PostePresenceWhereInput[]
    NOT?: PostePresenceWhereInput | PostePresenceWhereInput[]
    cyberId?: StringFilter<"PostePresence"> | string
    numeroPoste?: IntFilter<"PostePresence"> | number
    connected?: BoolFilter<"PostePresence"> | boolean
    lastSeenAt?: DateTimeFilter<"PostePresence"> | Date | string
    updatedAt?: DateTimeFilter<"PostePresence"> | Date | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
  }, "id" | "cyberId_numeroPoste">

  export type PostePresenceOrderByWithAggregationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    connected?: SortOrder
    lastSeenAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PostePresenceCountOrderByAggregateInput
    _avg?: PostePresenceAvgOrderByAggregateInput
    _max?: PostePresenceMaxOrderByAggregateInput
    _min?: PostePresenceMinOrderByAggregateInput
    _sum?: PostePresenceSumOrderByAggregateInput
  }

  export type PostePresenceScalarWhereWithAggregatesInput = {
    AND?: PostePresenceScalarWhereWithAggregatesInput | PostePresenceScalarWhereWithAggregatesInput[]
    OR?: PostePresenceScalarWhereWithAggregatesInput[]
    NOT?: PostePresenceScalarWhereWithAggregatesInput | PostePresenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostePresence"> | string
    cyberId?: StringWithAggregatesFilter<"PostePresence"> | string
    numeroPoste?: IntWithAggregatesFilter<"PostePresence"> | number
    connected?: BoolWithAggregatesFilter<"PostePresence"> | boolean
    lastSeenAt?: DateTimeWithAggregatesFilter<"PostePresence"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PostePresence"> | Date | string
  }

  export type TransactionCaisseWhereInput = {
    AND?: TransactionCaisseWhereInput | TransactionCaisseWhereInput[]
    OR?: TransactionCaisseWhereInput[]
    NOT?: TransactionCaisseWhereInput | TransactionCaisseWhereInput[]
    id?: StringFilter<"TransactionCaisse"> | string
    cyberId?: StringFilter<"TransactionCaisse"> | string
    montant?: DecimalFilter<"TransactionCaisse"> | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFilter<"TransactionCaisse"> | $Enums.TypePaiement
    description?: StringFilter<"TransactionCaisse"> | string
    dateTransaction?: DateTimeFilter<"TransactionCaisse"> | Date | string
    employeId?: StringFilter<"TransactionCaisse"> | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    employe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type TransactionCaisseOrderByWithRelationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    montant?: SortOrder
    typePaiement?: SortOrder
    description?: SortOrder
    dateTransaction?: SortOrder
    employeId?: SortOrder
    cyber?: CyberOrderByWithRelationInput
    employe?: UserOrderByWithRelationInput
  }

  export type TransactionCaisseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TransactionCaisseWhereInput | TransactionCaisseWhereInput[]
    OR?: TransactionCaisseWhereInput[]
    NOT?: TransactionCaisseWhereInput | TransactionCaisseWhereInput[]
    cyberId?: StringFilter<"TransactionCaisse"> | string
    montant?: DecimalFilter<"TransactionCaisse"> | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFilter<"TransactionCaisse"> | $Enums.TypePaiement
    description?: StringFilter<"TransactionCaisse"> | string
    dateTransaction?: DateTimeFilter<"TransactionCaisse"> | Date | string
    employeId?: StringFilter<"TransactionCaisse"> | string
    cyber?: XOR<CyberScalarRelationFilter, CyberWhereInput>
    employe?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type TransactionCaisseOrderByWithAggregationInput = {
    id?: SortOrder
    cyberId?: SortOrder
    montant?: SortOrder
    typePaiement?: SortOrder
    description?: SortOrder
    dateTransaction?: SortOrder
    employeId?: SortOrder
    _count?: TransactionCaisseCountOrderByAggregateInput
    _avg?: TransactionCaisseAvgOrderByAggregateInput
    _max?: TransactionCaisseMaxOrderByAggregateInput
    _min?: TransactionCaisseMinOrderByAggregateInput
    _sum?: TransactionCaisseSumOrderByAggregateInput
  }

  export type TransactionCaisseScalarWhereWithAggregatesInput = {
    AND?: TransactionCaisseScalarWhereWithAggregatesInput | TransactionCaisseScalarWhereWithAggregatesInput[]
    OR?: TransactionCaisseScalarWhereWithAggregatesInput[]
    NOT?: TransactionCaisseScalarWhereWithAggregatesInput | TransactionCaisseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TransactionCaisse"> | string
    cyberId?: StringWithAggregatesFilter<"TransactionCaisse"> | string
    montant?: DecimalWithAggregatesFilter<"TransactionCaisse"> | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementWithAggregatesFilter<"TransactionCaisse"> | $Enums.TypePaiement
    description?: StringWithAggregatesFilter<"TransactionCaisse"> | string
    dateTransaction?: DateTimeWithAggregatesFilter<"TransactionCaisse"> | Date | string
    employeId?: StringWithAggregatesFilter<"TransactionCaisse"> | string
  }

  export type CyberCreateInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    tickets?: TicketCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type CyberCreateManyInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CyberUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CyberUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutEmployeInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberUncheckedCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketUncheckedCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseUncheckedCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutEmployeNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUncheckedUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUncheckedUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUncheckedUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberCreateInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutCybersInput
    cyber: CyberCreateNestedOneWithoutStaffAssignmentsInput
  }

  export type UserCyberUncheckedCreateInput = {
    userId: string
    cyberId: string
    assignedAt?: Date | string
  }

  export type UserCyberUpdateInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCybersNestedInput
    cyber?: CyberUpdateOneRequiredWithoutStaffAssignmentsNestedInput
  }

  export type UserCyberUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberCreateManyInput = {
    userId: string
    cyberId: string
    assignedAt?: Date | string
  }

  export type UserCyberUpdateManyMutationInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FideliteConfigCreateInput = {
    id?: string
    pointsParMinuteAchat?: number
    pointsPourMinuteGratuite?: number
    pointsPour100Ar?: number
    actif?: boolean
    updatedAt?: Date | string
  }

  export type FideliteConfigUncheckedCreateInput = {
    id?: string
    pointsParMinuteAchat?: number
    pointsPourMinuteGratuite?: number
    pointsPour100Ar?: number
    actif?: boolean
    updatedAt?: Date | string
  }

  export type FideliteConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsParMinuteAchat?: IntFieldUpdateOperationsInput | number
    pointsPourMinuteGratuite?: IntFieldUpdateOperationsInput | number
    pointsPour100Ar?: IntFieldUpdateOperationsInput | number
    actif?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FideliteConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsParMinuteAchat?: IntFieldUpdateOperationsInput | number
    pointsPourMinuteGratuite?: IntFieldUpdateOperationsInput | number
    pointsPour100Ar?: IntFieldUpdateOperationsInput | number
    actif?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FideliteConfigCreateManyInput = {
    id?: string
    pointsParMinuteAchat?: number
    pointsPourMinuteGratuite?: number
    pointsPour100Ar?: number
    actif?: boolean
    updatedAt?: Date | string
  }

  export type FideliteConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsParMinuteAchat?: IntFieldUpdateOperationsInput | number
    pointsPourMinuteGratuite?: IntFieldUpdateOperationsInput | number
    pointsPour100Ar?: IntFieldUpdateOperationsInput | number
    actif?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FideliteConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pointsParMinuteAchat?: IntFieldUpdateOperationsInput | number
    pointsPourMinuteGratuite?: IntFieldUpdateOperationsInput | number
    pointsPour100Ar?: IntFieldUpdateOperationsInput | number
    actif?: BoolFieldUpdateOperationsInput | boolean
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientFideliteCreateInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutClientFideliteInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutClientInput
  }

  export type ClientFideliteUncheckedCreateInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutClientFideliteInput
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientFideliteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutClientFideliteNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutClientNestedInput
  }

  export type ClientFideliteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutClientFideliteNestedInput
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientFideliteCreateManyInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
  }

  export type ClientFideliteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientFideliteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteCreateInput = {
    id?: string
    type: $Enums.TypeMouvementFidelite
    points: number
    description: string
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutMouvementsFideliteInput
    client: ClientFideliteCreateNestedOneWithoutMouvementsInput
    ticket?: TicketCreateNestedOneWithoutMouvementsInput
    employe: UserCreateNestedOneWithoutMouvementsFideliteInput
  }

  export type MouvementFideliteUncheckedCreateInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutMouvementsFideliteNestedInput
    client?: ClientFideliteUpdateOneRequiredWithoutMouvementsNestedInput
    ticket?: TicketUpdateOneWithoutMouvementsNestedInput
    employe?: UserUpdateOneRequiredWithoutMouvementsFideliteNestedInput
  }

  export type MouvementFideliteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteCreateManyInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutTicketsInput
    creePar: UserCreateNestedOneWithoutTicketsCreesInput
    clientFidelite?: ClientFideliteCreateNestedOneWithoutTicketsInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTicketsNestedInput
    creePar?: UserUpdateOneRequiredWithoutTicketsCreesNestedInput
    clientFidelite?: ClientFideliteUpdateOneWithoutTicketsNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketCreateManyInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TicketUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurCreateInput = {
    id?: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
    cyber: CyberCreateNestedOneWithoutSessionsInput
    ticketActuel?: TicketCreateNestedOneWithoutSessionsInput
  }

  export type SessionOrdinateurUncheckedCreateInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    ticketActuelId?: string | null
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type SessionOrdinateurUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutSessionsNestedInput
    ticketActuel?: TicketUpdateOneWithoutSessionsNestedInput
  }

  export type SessionOrdinateurUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    ticketActuelId?: NullableStringFieldUpdateOperationsInput | string | null
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurCreateManyInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    ticketActuelId?: string | null
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type SessionOrdinateurUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    ticketActuelId?: NullableStringFieldUpdateOperationsInput | string | null
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceCreateInput = {
    id?: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
    cyber: CyberCreateNestedOneWithoutPostePresencesInput
  }

  export type PostePresenceUncheckedCreateInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostePresenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutPostePresencesNestedInput
  }

  export type PostePresenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceCreateManyInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostePresenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCaisseCreateInput = {
    id?: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    cyber: CyberCreateNestedOneWithoutTransactionsInput
    employe: UserCreateNestedOneWithoutTransactionsCaisseInput
  }

  export type TransactionCaisseUncheckedCreateInput = {
    id?: string
    cyberId: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    employeId: string
  }

  export type TransactionCaisseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTransactionsNestedInput
    employe?: UserUpdateOneRequiredWithoutTransactionsCaisseNestedInput
  }

  export type TransactionCaisseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCaisseCreateManyInput = {
    id?: string
    cyberId: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    employeId: string
  }

  export type TransactionCaisseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCaisseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableListFilter<$PrismaModel = never> = {
    equals?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    has?: number | IntFieldRefInput<$PrismaModel> | null
    hasEvery?: number[] | ListIntFieldRefInput<$PrismaModel>
    hasSome?: number[] | ListIntFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCyberListRelationFilter = {
    every?: UserCyberWhereInput
    some?: UserCyberWhereInput
    none?: UserCyberWhereInput
  }

  export type TicketListRelationFilter = {
    every?: TicketWhereInput
    some?: TicketWhereInput
    none?: TicketWhereInput
  }

  export type SessionOrdinateurListRelationFilter = {
    every?: SessionOrdinateurWhereInput
    some?: SessionOrdinateurWhereInput
    none?: SessionOrdinateurWhereInput
  }

  export type PostePresenceListRelationFilter = {
    every?: PostePresenceWhereInput
    some?: PostePresenceWhereInput
    none?: PostePresenceWhereInput
  }

  export type TransactionCaisseListRelationFilter = {
    every?: TransactionCaisseWhereInput
    some?: TransactionCaisseWhereInput
    none?: TransactionCaisseWhereInput
  }

  export type MouvementFideliteListRelationFilter = {
    every?: MouvementFideliteWhereInput
    some?: MouvementFideliteWhereInput
    none?: MouvementFideliteWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCyberOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TicketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrdinateurOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PostePresenceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TransactionCaisseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MouvementFideliteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CyberCountOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nombrePostes?: SortOrder
    dureesTicket?: SortOrder
    prixParMinute?: SortOrder
    isActive?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CyberAvgOrderByAggregateInput = {
    nombrePostes?: SortOrder
    dureesTicket?: SortOrder
    prixParMinute?: SortOrder
  }

  export type CyberMaxOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nombrePostes?: SortOrder
    prixParMinute?: SortOrder
    isActive?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CyberMinOrderByAggregateInput = {
    id?: SortOrder
    nom?: SortOrder
    nombrePostes?: SortOrder
    prixParMinute?: SortOrder
    isActive?: SortOrder
    archivedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CyberSumOrderByAggregateInput = {
    nombrePostes?: SortOrder
    dureesTicket?: SortOrder
    prixParMinute?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    supabaseUserId?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CyberScalarRelationFilter = {
    is?: CyberWhereInput
    isNot?: CyberWhereInput
  }

  export type UserCyberUserIdCyberIdCompoundUniqueInput = {
    userId: string
    cyberId: string
  }

  export type UserCyberCountOrderByAggregateInput = {
    userId?: SortOrder
    cyberId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserCyberMaxOrderByAggregateInput = {
    userId?: SortOrder
    cyberId?: SortOrder
    assignedAt?: SortOrder
  }

  export type UserCyberMinOrderByAggregateInput = {
    userId?: SortOrder
    cyberId?: SortOrder
    assignedAt?: SortOrder
  }

  export type FideliteConfigCountOrderByAggregateInput = {
    id?: SortOrder
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
    actif?: SortOrder
    updatedAt?: SortOrder
  }

  export type FideliteConfigAvgOrderByAggregateInput = {
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
  }

  export type FideliteConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
    actif?: SortOrder
    updatedAt?: SortOrder
  }

  export type FideliteConfigMinOrderByAggregateInput = {
    id?: SortOrder
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
    actif?: SortOrder
    updatedAt?: SortOrder
  }

  export type FideliteConfigSumOrderByAggregateInput = {
    pointsParMinuteAchat?: SortOrder
    pointsPourMinuteGratuite?: SortOrder
    pointsPour100Ar?: SortOrder
  }

  export type ClientFideliteCountOrderByAggregateInput = {
    id?: SortOrder
    telephone?: SortOrder
    nom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientFideliteMaxOrderByAggregateInput = {
    id?: SortOrder
    telephone?: SortOrder
    nom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type ClientFideliteMinOrderByAggregateInput = {
    id?: SortOrder
    telephone?: SortOrder
    nom?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumTypeMouvementFideliteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeMouvementFidelite | EnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel> | $Enums.TypeMouvementFidelite
  }

  export type ClientFideliteScalarRelationFilter = {
    is?: ClientFideliteWhereInput
    isNot?: ClientFideliteWhereInput
  }

  export type TicketNullableScalarRelationFilter = {
    is?: TicketWhereInput | null
    isNot?: TicketWhereInput | null
  }

  export type MouvementFideliteCountOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    ticketId?: SortOrder
    employeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementFideliteAvgOrderByAggregateInput = {
    points?: SortOrder
  }

  export type MouvementFideliteMaxOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    ticketId?: SortOrder
    employeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementFideliteMinOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    clientId?: SortOrder
    type?: SortOrder
    points?: SortOrder
    ticketId?: SortOrder
    employeId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type MouvementFideliteSumOrderByAggregateInput = {
    points?: SortOrder
  }

  export type EnumTypeMouvementFideliteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeMouvementFidelite | EnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeMouvementFideliteWithAggregatesFilter<$PrismaModel> | $Enums.TypeMouvementFidelite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel>
    _max?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel>
  }

  export type EnumStatutTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutTicketFilter<$PrismaModel> | $Enums.StatutTicket
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientFideliteNullableScalarRelationFilter = {
    is?: ClientFideliteWhereInput | null
    isNot?: ClientFideliteWhereInput | null
  }

  export type TicketCyberIdCodeUniqueCompoundUniqueInput = {
    cyberId: string
    codeUnique: string
  }

  export type TicketCountOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    codeUnique?: SortOrder
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    statut?: SortOrder
    creeParId?: SortOrder
    clientFideliteId?: SortOrder
    pointsGagnes?: SortOrder
    pointsUtilises?: SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketAvgOrderByAggregateInput = {
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    pointsGagnes?: SortOrder
    pointsUtilises?: SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrder
  }

  export type TicketMaxOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    codeUnique?: SortOrder
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    statut?: SortOrder
    creeParId?: SortOrder
    clientFideliteId?: SortOrder
    pointsGagnes?: SortOrder
    pointsUtilises?: SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketMinOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    codeUnique?: SortOrder
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    statut?: SortOrder
    creeParId?: SortOrder
    clientFideliteId?: SortOrder
    pointsGagnes?: SortOrder
    pointsUtilises?: SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrder
    createdAt?: SortOrder
  }

  export type TicketSumOrderByAggregateInput = {
    tempsInitial?: SortOrder
    tempsRestant?: SortOrder
    pointsGagnes?: SortOrder
    pointsUtilises?: SortOrder
    minutesBonus?: SortOrder
    reductionAr?: SortOrder
  }

  export type EnumStatutTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatutTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTicketFilter<$PrismaModel>
    _max?: NestedEnumStatutTicketFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type EnumStatutPosteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPoste | EnumStatutPosteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPosteFilter<$PrismaModel> | $Enums.StatutPoste
  }

  export type EnumTypeSessionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSession | EnumTypeSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeSessionNullableFilter<$PrismaModel> | $Enums.TypeSession | null
  }

  export type EnumSourceMiseAJourFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceMiseAJour | EnumSourceMiseAJourFieldRefInput<$PrismaModel>
    in?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceMiseAJourFilter<$PrismaModel> | $Enums.SourceMiseAJour
  }

  export type SessionOrdinateurCyberIdNumeroPosteCompoundUniqueInput = {
    cyberId: string
    numeroPoste: number
  }

  export type SessionOrdinateurCountOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    statut?: SortOrder
    ticketActuelId?: SortOrder
    typeSession?: SortOrder
    baseTarifHoraire?: SortOrder
    tempsDebut?: SortOrder
    tempsFin?: SortOrder
    montantDu?: SortOrder
    sourceMiseAJour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionOrdinateurAvgOrderByAggregateInput = {
    numeroPoste?: SortOrder
    baseTarifHoraire?: SortOrder
    montantDu?: SortOrder
  }

  export type SessionOrdinateurMaxOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    statut?: SortOrder
    ticketActuelId?: SortOrder
    typeSession?: SortOrder
    baseTarifHoraire?: SortOrder
    tempsDebut?: SortOrder
    tempsFin?: SortOrder
    montantDu?: SortOrder
    sourceMiseAJour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionOrdinateurMinOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    statut?: SortOrder
    ticketActuelId?: SortOrder
    typeSession?: SortOrder
    baseTarifHoraire?: SortOrder
    tempsDebut?: SortOrder
    tempsFin?: SortOrder
    montantDu?: SortOrder
    sourceMiseAJour?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionOrdinateurSumOrderByAggregateInput = {
    numeroPoste?: SortOrder
    baseTarifHoraire?: SortOrder
    montantDu?: SortOrder
  }

  export type EnumStatutPosteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPoste | EnumStatutPosteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPosteWithAggregatesFilter<$PrismaModel> | $Enums.StatutPoste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPosteFilter<$PrismaModel>
    _max?: NestedEnumStatutPosteFilter<$PrismaModel>
  }

  export type EnumTypeSessionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSession | EnumTypeSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeSessionNullableWithAggregatesFilter<$PrismaModel> | $Enums.TypeSession | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTypeSessionNullableFilter<$PrismaModel>
    _max?: NestedEnumTypeSessionNullableFilter<$PrismaModel>
  }

  export type EnumSourceMiseAJourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceMiseAJour | EnumSourceMiseAJourFieldRefInput<$PrismaModel>
    in?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceMiseAJourWithAggregatesFilter<$PrismaModel> | $Enums.SourceMiseAJour
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceMiseAJourFilter<$PrismaModel>
    _max?: NestedEnumSourceMiseAJourFilter<$PrismaModel>
  }

  export type PostePresenceCyberIdNumeroPosteCompoundUniqueInput = {
    cyberId: string
    numeroPoste: number
  }

  export type PostePresenceCountOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    connected?: SortOrder
    lastSeenAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostePresenceAvgOrderByAggregateInput = {
    numeroPoste?: SortOrder
  }

  export type PostePresenceMaxOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    connected?: SortOrder
    lastSeenAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostePresenceMinOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    numeroPoste?: SortOrder
    connected?: SortOrder
    lastSeenAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PostePresenceSumOrderByAggregateInput = {
    numeroPoste?: SortOrder
  }

  export type EnumTypePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePaiement | EnumTypePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePaiementFilter<$PrismaModel> | $Enums.TypePaiement
  }

  export type TransactionCaisseCountOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    montant?: SortOrder
    typePaiement?: SortOrder
    description?: SortOrder
    dateTransaction?: SortOrder
    employeId?: SortOrder
  }

  export type TransactionCaisseAvgOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type TransactionCaisseMaxOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    montant?: SortOrder
    typePaiement?: SortOrder
    description?: SortOrder
    dateTransaction?: SortOrder
    employeId?: SortOrder
  }

  export type TransactionCaisseMinOrderByAggregateInput = {
    id?: SortOrder
    cyberId?: SortOrder
    montant?: SortOrder
    typePaiement?: SortOrder
    description?: SortOrder
    dateTransaction?: SortOrder
    employeId?: SortOrder
  }

  export type TransactionCaisseSumOrderByAggregateInput = {
    montant?: SortOrder
  }

  export type EnumTypePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePaiement | EnumTypePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePaiementWithAggregatesFilter<$PrismaModel> | $Enums.TypePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePaiementFilter<$PrismaModel>
    _max?: NestedEnumTypePaiementFilter<$PrismaModel>
  }

  export type CyberCreatedureesTicketInput = {
    set: number[]
  }

  export type UserCyberCreateNestedManyWithoutCyberInput = {
    create?: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput> | UserCyberCreateWithoutCyberInput[] | UserCyberUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutCyberInput | UserCyberCreateOrConnectWithoutCyberInput[]
    createMany?: UserCyberCreateManyCyberInputEnvelope
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCyberInput = {
    create?: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput> | TicketCreateWithoutCyberInput[] | TicketUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCyberInput | TicketCreateOrConnectWithoutCyberInput[]
    createMany?: TicketCreateManyCyberInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SessionOrdinateurCreateNestedManyWithoutCyberInput = {
    create?: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput> | SessionOrdinateurCreateWithoutCyberInput[] | SessionOrdinateurUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutCyberInput | SessionOrdinateurCreateOrConnectWithoutCyberInput[]
    createMany?: SessionOrdinateurCreateManyCyberInputEnvelope
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
  }

  export type PostePresenceCreateNestedManyWithoutCyberInput = {
    create?: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput> | PostePresenceCreateWithoutCyberInput[] | PostePresenceUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: PostePresenceCreateOrConnectWithoutCyberInput | PostePresenceCreateOrConnectWithoutCyberInput[]
    createMany?: PostePresenceCreateManyCyberInputEnvelope
    connect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
  }

  export type TransactionCaisseCreateNestedManyWithoutCyberInput = {
    create?: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput> | TransactionCaisseCreateWithoutCyberInput[] | TransactionCaisseUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutCyberInput | TransactionCaisseCreateOrConnectWithoutCyberInput[]
    createMany?: TransactionCaisseCreateManyCyberInputEnvelope
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
  }

  export type MouvementFideliteCreateNestedManyWithoutCyberInput = {
    create?: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput> | MouvementFideliteCreateWithoutCyberInput[] | MouvementFideliteUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutCyberInput | MouvementFideliteCreateOrConnectWithoutCyberInput[]
    createMany?: MouvementFideliteCreateManyCyberInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type UserCyberUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput> | UserCyberCreateWithoutCyberInput[] | UserCyberUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutCyberInput | UserCyberCreateOrConnectWithoutCyberInput[]
    createMany?: UserCyberCreateManyCyberInputEnvelope
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput> | TicketCreateWithoutCyberInput[] | TicketUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCyberInput | TicketCreateOrConnectWithoutCyberInput[]
    createMany?: TicketCreateManyCyberInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput> | SessionOrdinateurCreateWithoutCyberInput[] | SessionOrdinateurUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutCyberInput | SessionOrdinateurCreateOrConnectWithoutCyberInput[]
    createMany?: SessionOrdinateurCreateManyCyberInputEnvelope
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
  }

  export type PostePresenceUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput> | PostePresenceCreateWithoutCyberInput[] | PostePresenceUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: PostePresenceCreateOrConnectWithoutCyberInput | PostePresenceCreateOrConnectWithoutCyberInput[]
    createMany?: PostePresenceCreateManyCyberInputEnvelope
    connect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
  }

  export type TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput> | TransactionCaisseCreateWithoutCyberInput[] | TransactionCaisseUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutCyberInput | TransactionCaisseCreateOrConnectWithoutCyberInput[]
    createMany?: TransactionCaisseCreateManyCyberInputEnvelope
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
  }

  export type MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput = {
    create?: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput> | MouvementFideliteCreateWithoutCyberInput[] | MouvementFideliteUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutCyberInput | MouvementFideliteCreateOrConnectWithoutCyberInput[]
    createMany?: MouvementFideliteCreateManyCyberInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CyberUpdatedureesTicketInput = {
    set?: number[]
    push?: number | number[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserCyberUpdateManyWithoutCyberNestedInput = {
    create?: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput> | UserCyberCreateWithoutCyberInput[] | UserCyberUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutCyberInput | UserCyberCreateOrConnectWithoutCyberInput[]
    upsert?: UserCyberUpsertWithWhereUniqueWithoutCyberInput | UserCyberUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: UserCyberCreateManyCyberInputEnvelope
    set?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    disconnect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    delete?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    update?: UserCyberUpdateWithWhereUniqueWithoutCyberInput | UserCyberUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: UserCyberUpdateManyWithWhereWithoutCyberInput | UserCyberUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCyberNestedInput = {
    create?: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput> | TicketCreateWithoutCyberInput[] | TicketUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCyberInput | TicketCreateOrConnectWithoutCyberInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCyberInput | TicketUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: TicketCreateManyCyberInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCyberInput | TicketUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCyberInput | TicketUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SessionOrdinateurUpdateManyWithoutCyberNestedInput = {
    create?: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput> | SessionOrdinateurCreateWithoutCyberInput[] | SessionOrdinateurUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutCyberInput | SessionOrdinateurCreateOrConnectWithoutCyberInput[]
    upsert?: SessionOrdinateurUpsertWithWhereUniqueWithoutCyberInput | SessionOrdinateurUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: SessionOrdinateurCreateManyCyberInputEnvelope
    set?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    disconnect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    delete?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    update?: SessionOrdinateurUpdateWithWhereUniqueWithoutCyberInput | SessionOrdinateurUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: SessionOrdinateurUpdateManyWithWhereWithoutCyberInput | SessionOrdinateurUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
  }

  export type PostePresenceUpdateManyWithoutCyberNestedInput = {
    create?: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput> | PostePresenceCreateWithoutCyberInput[] | PostePresenceUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: PostePresenceCreateOrConnectWithoutCyberInput | PostePresenceCreateOrConnectWithoutCyberInput[]
    upsert?: PostePresenceUpsertWithWhereUniqueWithoutCyberInput | PostePresenceUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: PostePresenceCreateManyCyberInputEnvelope
    set?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    disconnect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    delete?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    connect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    update?: PostePresenceUpdateWithWhereUniqueWithoutCyberInput | PostePresenceUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: PostePresenceUpdateManyWithWhereWithoutCyberInput | PostePresenceUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: PostePresenceScalarWhereInput | PostePresenceScalarWhereInput[]
  }

  export type TransactionCaisseUpdateManyWithoutCyberNestedInput = {
    create?: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput> | TransactionCaisseCreateWithoutCyberInput[] | TransactionCaisseUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutCyberInput | TransactionCaisseCreateOrConnectWithoutCyberInput[]
    upsert?: TransactionCaisseUpsertWithWhereUniqueWithoutCyberInput | TransactionCaisseUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: TransactionCaisseCreateManyCyberInputEnvelope
    set?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    disconnect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    delete?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    update?: TransactionCaisseUpdateWithWhereUniqueWithoutCyberInput | TransactionCaisseUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: TransactionCaisseUpdateManyWithWhereWithoutCyberInput | TransactionCaisseUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
  }

  export type MouvementFideliteUpdateManyWithoutCyberNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput> | MouvementFideliteCreateWithoutCyberInput[] | MouvementFideliteUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutCyberInput | MouvementFideliteCreateOrConnectWithoutCyberInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutCyberInput | MouvementFideliteUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: MouvementFideliteCreateManyCyberInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutCyberInput | MouvementFideliteUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutCyberInput | MouvementFideliteUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type UserCyberUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput> | UserCyberCreateWithoutCyberInput[] | UserCyberUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutCyberInput | UserCyberCreateOrConnectWithoutCyberInput[]
    upsert?: UserCyberUpsertWithWhereUniqueWithoutCyberInput | UserCyberUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: UserCyberCreateManyCyberInputEnvelope
    set?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    disconnect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    delete?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    update?: UserCyberUpdateWithWhereUniqueWithoutCyberInput | UserCyberUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: UserCyberUpdateManyWithWhereWithoutCyberInput | UserCyberUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput> | TicketCreateWithoutCyberInput[] | TicketUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCyberInput | TicketCreateOrConnectWithoutCyberInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCyberInput | TicketUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: TicketCreateManyCyberInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCyberInput | TicketUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCyberInput | TicketUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput> | SessionOrdinateurCreateWithoutCyberInput[] | SessionOrdinateurUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutCyberInput | SessionOrdinateurCreateOrConnectWithoutCyberInput[]
    upsert?: SessionOrdinateurUpsertWithWhereUniqueWithoutCyberInput | SessionOrdinateurUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: SessionOrdinateurCreateManyCyberInputEnvelope
    set?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    disconnect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    delete?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    update?: SessionOrdinateurUpdateWithWhereUniqueWithoutCyberInput | SessionOrdinateurUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: SessionOrdinateurUpdateManyWithWhereWithoutCyberInput | SessionOrdinateurUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
  }

  export type PostePresenceUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput> | PostePresenceCreateWithoutCyberInput[] | PostePresenceUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: PostePresenceCreateOrConnectWithoutCyberInput | PostePresenceCreateOrConnectWithoutCyberInput[]
    upsert?: PostePresenceUpsertWithWhereUniqueWithoutCyberInput | PostePresenceUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: PostePresenceCreateManyCyberInputEnvelope
    set?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    disconnect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    delete?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    connect?: PostePresenceWhereUniqueInput | PostePresenceWhereUniqueInput[]
    update?: PostePresenceUpdateWithWhereUniqueWithoutCyberInput | PostePresenceUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: PostePresenceUpdateManyWithWhereWithoutCyberInput | PostePresenceUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: PostePresenceScalarWhereInput | PostePresenceScalarWhereInput[]
  }

  export type TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput> | TransactionCaisseCreateWithoutCyberInput[] | TransactionCaisseUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutCyberInput | TransactionCaisseCreateOrConnectWithoutCyberInput[]
    upsert?: TransactionCaisseUpsertWithWhereUniqueWithoutCyberInput | TransactionCaisseUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: TransactionCaisseCreateManyCyberInputEnvelope
    set?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    disconnect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    delete?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    update?: TransactionCaisseUpdateWithWhereUniqueWithoutCyberInput | TransactionCaisseUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: TransactionCaisseUpdateManyWithWhereWithoutCyberInput | TransactionCaisseUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput> | MouvementFideliteCreateWithoutCyberInput[] | MouvementFideliteUncheckedCreateWithoutCyberInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutCyberInput | MouvementFideliteCreateOrConnectWithoutCyberInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutCyberInput | MouvementFideliteUpsertWithWhereUniqueWithoutCyberInput[]
    createMany?: MouvementFideliteCreateManyCyberInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutCyberInput | MouvementFideliteUpdateWithWhereUniqueWithoutCyberInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutCyberInput | MouvementFideliteUpdateManyWithWhereWithoutCyberInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type UserCyberCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput> | UserCyberCreateWithoutUserInput[] | UserCyberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutUserInput | UserCyberCreateOrConnectWithoutUserInput[]
    createMany?: UserCyberCreateManyUserInputEnvelope
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
  }

  export type TicketCreateNestedManyWithoutCreeParInput = {
    create?: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput> | TicketCreateWithoutCreeParInput[] | TicketUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreeParInput | TicketCreateOrConnectWithoutCreeParInput[]
    createMany?: TicketCreateManyCreeParInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionCaisseCreateNestedManyWithoutEmployeInput = {
    create?: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput> | TransactionCaisseCreateWithoutEmployeInput[] | TransactionCaisseUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutEmployeInput | TransactionCaisseCreateOrConnectWithoutEmployeInput[]
    createMany?: TransactionCaisseCreateManyEmployeInputEnvelope
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
  }

  export type MouvementFideliteCreateNestedManyWithoutEmployeInput = {
    create?: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput> | MouvementFideliteCreateWithoutEmployeInput[] | MouvementFideliteUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutEmployeInput | MouvementFideliteCreateOrConnectWithoutEmployeInput[]
    createMany?: MouvementFideliteCreateManyEmployeInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type UserCyberUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput> | UserCyberCreateWithoutUserInput[] | UserCyberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutUserInput | UserCyberCreateOrConnectWithoutUserInput[]
    createMany?: UserCyberCreateManyUserInputEnvelope
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutCreeParInput = {
    create?: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput> | TicketCreateWithoutCreeParInput[] | TicketUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreeParInput | TicketCreateOrConnectWithoutCreeParInput[]
    createMany?: TicketCreateManyCreeParInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type TransactionCaisseUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput> | TransactionCaisseCreateWithoutEmployeInput[] | TransactionCaisseUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutEmployeInput | TransactionCaisseCreateOrConnectWithoutEmployeInput[]
    createMany?: TransactionCaisseCreateManyEmployeInputEnvelope
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
  }

  export type MouvementFideliteUncheckedCreateNestedManyWithoutEmployeInput = {
    create?: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput> | MouvementFideliteCreateWithoutEmployeInput[] | MouvementFideliteUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutEmployeInput | MouvementFideliteCreateOrConnectWithoutEmployeInput[]
    createMany?: MouvementFideliteCreateManyEmployeInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type UserCyberUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput> | UserCyberCreateWithoutUserInput[] | UserCyberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutUserInput | UserCyberCreateOrConnectWithoutUserInput[]
    upsert?: UserCyberUpsertWithWhereUniqueWithoutUserInput | UserCyberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCyberCreateManyUserInputEnvelope
    set?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    disconnect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    delete?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    update?: UserCyberUpdateWithWhereUniqueWithoutUserInput | UserCyberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCyberUpdateManyWithWhereWithoutUserInput | UserCyberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
  }

  export type TicketUpdateManyWithoutCreeParNestedInput = {
    create?: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput> | TicketCreateWithoutCreeParInput[] | TicketUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreeParInput | TicketCreateOrConnectWithoutCreeParInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreeParInput | TicketUpsertWithWhereUniqueWithoutCreeParInput[]
    createMany?: TicketCreateManyCreeParInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreeParInput | TicketUpdateWithWhereUniqueWithoutCreeParInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreeParInput | TicketUpdateManyWithWhereWithoutCreeParInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionCaisseUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput> | TransactionCaisseCreateWithoutEmployeInput[] | TransactionCaisseUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutEmployeInput | TransactionCaisseCreateOrConnectWithoutEmployeInput[]
    upsert?: TransactionCaisseUpsertWithWhereUniqueWithoutEmployeInput | TransactionCaisseUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: TransactionCaisseCreateManyEmployeInputEnvelope
    set?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    disconnect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    delete?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    update?: TransactionCaisseUpdateWithWhereUniqueWithoutEmployeInput | TransactionCaisseUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: TransactionCaisseUpdateManyWithWhereWithoutEmployeInput | TransactionCaisseUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
  }

  export type MouvementFideliteUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput> | MouvementFideliteCreateWithoutEmployeInput[] | MouvementFideliteUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutEmployeInput | MouvementFideliteCreateOrConnectWithoutEmployeInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutEmployeInput | MouvementFideliteUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: MouvementFideliteCreateManyEmployeInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutEmployeInput | MouvementFideliteUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutEmployeInput | MouvementFideliteUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type UserCyberUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput> | UserCyberCreateWithoutUserInput[] | UserCyberUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserCyberCreateOrConnectWithoutUserInput | UserCyberCreateOrConnectWithoutUserInput[]
    upsert?: UserCyberUpsertWithWhereUniqueWithoutUserInput | UserCyberUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserCyberCreateManyUserInputEnvelope
    set?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    disconnect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    delete?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    connect?: UserCyberWhereUniqueInput | UserCyberWhereUniqueInput[]
    update?: UserCyberUpdateWithWhereUniqueWithoutUserInput | UserCyberUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserCyberUpdateManyWithWhereWithoutUserInput | UserCyberUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutCreeParNestedInput = {
    create?: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput> | TicketCreateWithoutCreeParInput[] | TicketUncheckedCreateWithoutCreeParInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutCreeParInput | TicketCreateOrConnectWithoutCreeParInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutCreeParInput | TicketUpsertWithWhereUniqueWithoutCreeParInput[]
    createMany?: TicketCreateManyCreeParInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutCreeParInput | TicketUpdateWithWhereUniqueWithoutCreeParInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutCreeParInput | TicketUpdateManyWithWhereWithoutCreeParInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type TransactionCaisseUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput> | TransactionCaisseCreateWithoutEmployeInput[] | TransactionCaisseUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: TransactionCaisseCreateOrConnectWithoutEmployeInput | TransactionCaisseCreateOrConnectWithoutEmployeInput[]
    upsert?: TransactionCaisseUpsertWithWhereUniqueWithoutEmployeInput | TransactionCaisseUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: TransactionCaisseCreateManyEmployeInputEnvelope
    set?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    disconnect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    delete?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    connect?: TransactionCaisseWhereUniqueInput | TransactionCaisseWhereUniqueInput[]
    update?: TransactionCaisseUpdateWithWhereUniqueWithoutEmployeInput | TransactionCaisseUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: TransactionCaisseUpdateManyWithWhereWithoutEmployeInput | TransactionCaisseUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutEmployeNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput> | MouvementFideliteCreateWithoutEmployeInput[] | MouvementFideliteUncheckedCreateWithoutEmployeInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutEmployeInput | MouvementFideliteCreateOrConnectWithoutEmployeInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutEmployeInput | MouvementFideliteUpsertWithWhereUniqueWithoutEmployeInput[]
    createMany?: MouvementFideliteCreateManyEmployeInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutEmployeInput | MouvementFideliteUpdateWithWhereUniqueWithoutEmployeInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutEmployeInput | MouvementFideliteUpdateManyWithWhereWithoutEmployeInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCybersInput = {
    create?: XOR<UserCreateWithoutCybersInput, UserUncheckedCreateWithoutCybersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCybersInput
    connect?: UserWhereUniqueInput
  }

  export type CyberCreateNestedOneWithoutStaffAssignmentsInput = {
    create?: XOR<CyberCreateWithoutStaffAssignmentsInput, CyberUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutStaffAssignmentsInput
    connect?: CyberWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutCybersNestedInput = {
    create?: XOR<UserCreateWithoutCybersInput, UserUncheckedCreateWithoutCybersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCybersInput
    upsert?: UserUpsertWithoutCybersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCybersInput, UserUpdateWithoutCybersInput>, UserUncheckedUpdateWithoutCybersInput>
  }

  export type CyberUpdateOneRequiredWithoutStaffAssignmentsNestedInput = {
    create?: XOR<CyberCreateWithoutStaffAssignmentsInput, CyberUncheckedCreateWithoutStaffAssignmentsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutStaffAssignmentsInput
    upsert?: CyberUpsertWithoutStaffAssignmentsInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutStaffAssignmentsInput, CyberUpdateWithoutStaffAssignmentsInput>, CyberUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type TicketCreateNestedManyWithoutClientFideliteInput = {
    create?: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput> | TicketCreateWithoutClientFideliteInput[] | TicketUncheckedCreateWithoutClientFideliteInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientFideliteInput | TicketCreateOrConnectWithoutClientFideliteInput[]
    createMany?: TicketCreateManyClientFideliteInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MouvementFideliteCreateNestedManyWithoutClientInput = {
    create?: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput> | MouvementFideliteCreateWithoutClientInput[] | MouvementFideliteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutClientInput | MouvementFideliteCreateOrConnectWithoutClientInput[]
    createMany?: MouvementFideliteCreateManyClientInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type TicketUncheckedCreateNestedManyWithoutClientFideliteInput = {
    create?: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput> | TicketCreateWithoutClientFideliteInput[] | TicketUncheckedCreateWithoutClientFideliteInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientFideliteInput | TicketCreateOrConnectWithoutClientFideliteInput[]
    createMany?: TicketCreateManyClientFideliteInputEnvelope
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
  }

  export type MouvementFideliteUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput> | MouvementFideliteCreateWithoutClientInput[] | MouvementFideliteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutClientInput | MouvementFideliteCreateOrConnectWithoutClientInput[]
    createMany?: MouvementFideliteCreateManyClientInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type TicketUpdateManyWithoutClientFideliteNestedInput = {
    create?: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput> | TicketCreateWithoutClientFideliteInput[] | TicketUncheckedCreateWithoutClientFideliteInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientFideliteInput | TicketCreateOrConnectWithoutClientFideliteInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientFideliteInput | TicketUpsertWithWhereUniqueWithoutClientFideliteInput[]
    createMany?: TicketCreateManyClientFideliteInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientFideliteInput | TicketUpdateWithWhereUniqueWithoutClientFideliteInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientFideliteInput | TicketUpdateManyWithWhereWithoutClientFideliteInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MouvementFideliteUpdateManyWithoutClientNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput> | MouvementFideliteCreateWithoutClientInput[] | MouvementFideliteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutClientInput | MouvementFideliteCreateOrConnectWithoutClientInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutClientInput | MouvementFideliteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MouvementFideliteCreateManyClientInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutClientInput | MouvementFideliteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutClientInput | MouvementFideliteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type TicketUncheckedUpdateManyWithoutClientFideliteNestedInput = {
    create?: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput> | TicketCreateWithoutClientFideliteInput[] | TicketUncheckedCreateWithoutClientFideliteInput[]
    connectOrCreate?: TicketCreateOrConnectWithoutClientFideliteInput | TicketCreateOrConnectWithoutClientFideliteInput[]
    upsert?: TicketUpsertWithWhereUniqueWithoutClientFideliteInput | TicketUpsertWithWhereUniqueWithoutClientFideliteInput[]
    createMany?: TicketCreateManyClientFideliteInputEnvelope
    set?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    disconnect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    delete?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    connect?: TicketWhereUniqueInput | TicketWhereUniqueInput[]
    update?: TicketUpdateWithWhereUniqueWithoutClientFideliteInput | TicketUpdateWithWhereUniqueWithoutClientFideliteInput[]
    updateMany?: TicketUpdateManyWithWhereWithoutClientFideliteInput | TicketUpdateManyWithWhereWithoutClientFideliteInput[]
    deleteMany?: TicketScalarWhereInput | TicketScalarWhereInput[]
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput> | MouvementFideliteCreateWithoutClientInput[] | MouvementFideliteUncheckedCreateWithoutClientInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutClientInput | MouvementFideliteCreateOrConnectWithoutClientInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutClientInput | MouvementFideliteUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: MouvementFideliteCreateManyClientInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutClientInput | MouvementFideliteUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutClientInput | MouvementFideliteUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type CyberCreateNestedOneWithoutMouvementsFideliteInput = {
    create?: XOR<CyberCreateWithoutMouvementsFideliteInput, CyberUncheckedCreateWithoutMouvementsFideliteInput>
    connectOrCreate?: CyberCreateOrConnectWithoutMouvementsFideliteInput
    connect?: CyberWhereUniqueInput
  }

  export type ClientFideliteCreateNestedOneWithoutMouvementsInput = {
    create?: XOR<ClientFideliteCreateWithoutMouvementsInput, ClientFideliteUncheckedCreateWithoutMouvementsInput>
    connectOrCreate?: ClientFideliteCreateOrConnectWithoutMouvementsInput
    connect?: ClientFideliteWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutMouvementsInput = {
    create?: XOR<TicketCreateWithoutMouvementsInput, TicketUncheckedCreateWithoutMouvementsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMouvementsInput
    connect?: TicketWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMouvementsFideliteInput = {
    create?: XOR<UserCreateWithoutMouvementsFideliteInput, UserUncheckedCreateWithoutMouvementsFideliteInput>
    connectOrCreate?: UserCreateOrConnectWithoutMouvementsFideliteInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTypeMouvementFideliteFieldUpdateOperationsInput = {
    set?: $Enums.TypeMouvementFidelite
  }

  export type CyberUpdateOneRequiredWithoutMouvementsFideliteNestedInput = {
    create?: XOR<CyberCreateWithoutMouvementsFideliteInput, CyberUncheckedCreateWithoutMouvementsFideliteInput>
    connectOrCreate?: CyberCreateOrConnectWithoutMouvementsFideliteInput
    upsert?: CyberUpsertWithoutMouvementsFideliteInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutMouvementsFideliteInput, CyberUpdateWithoutMouvementsFideliteInput>, CyberUncheckedUpdateWithoutMouvementsFideliteInput>
  }

  export type ClientFideliteUpdateOneRequiredWithoutMouvementsNestedInput = {
    create?: XOR<ClientFideliteCreateWithoutMouvementsInput, ClientFideliteUncheckedCreateWithoutMouvementsInput>
    connectOrCreate?: ClientFideliteCreateOrConnectWithoutMouvementsInput
    upsert?: ClientFideliteUpsertWithoutMouvementsInput
    connect?: ClientFideliteWhereUniqueInput
    update?: XOR<XOR<ClientFideliteUpdateToOneWithWhereWithoutMouvementsInput, ClientFideliteUpdateWithoutMouvementsInput>, ClientFideliteUncheckedUpdateWithoutMouvementsInput>
  }

  export type TicketUpdateOneWithoutMouvementsNestedInput = {
    create?: XOR<TicketCreateWithoutMouvementsInput, TicketUncheckedCreateWithoutMouvementsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutMouvementsInput
    upsert?: TicketUpsertWithoutMouvementsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutMouvementsInput, TicketUpdateWithoutMouvementsInput>, TicketUncheckedUpdateWithoutMouvementsInput>
  }

  export type UserUpdateOneRequiredWithoutMouvementsFideliteNestedInput = {
    create?: XOR<UserCreateWithoutMouvementsFideliteInput, UserUncheckedCreateWithoutMouvementsFideliteInput>
    connectOrCreate?: UserCreateOrConnectWithoutMouvementsFideliteInput
    upsert?: UserUpsertWithoutMouvementsFideliteInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMouvementsFideliteInput, UserUpdateWithoutMouvementsFideliteInput>, UserUncheckedUpdateWithoutMouvementsFideliteInput>
  }

  export type CyberCreateNestedOneWithoutTicketsInput = {
    create?: XOR<CyberCreateWithoutTicketsInput, CyberUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutTicketsInput
    connect?: CyberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTicketsCreesInput = {
    create?: XOR<UserCreateWithoutTicketsCreesInput, UserUncheckedCreateWithoutTicketsCreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsCreesInput
    connect?: UserWhereUniqueInput
  }

  export type ClientFideliteCreateNestedOneWithoutTicketsInput = {
    create?: XOR<ClientFideliteCreateWithoutTicketsInput, ClientFideliteUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientFideliteCreateOrConnectWithoutTicketsInput
    connect?: ClientFideliteWhereUniqueInput
  }

  export type SessionOrdinateurCreateNestedManyWithoutTicketActuelInput = {
    create?: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput> | SessionOrdinateurCreateWithoutTicketActuelInput[] | SessionOrdinateurUncheckedCreateWithoutTicketActuelInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutTicketActuelInput | SessionOrdinateurCreateOrConnectWithoutTicketActuelInput[]
    createMany?: SessionOrdinateurCreateManyTicketActuelInputEnvelope
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
  }

  export type MouvementFideliteCreateNestedManyWithoutTicketInput = {
    create?: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput> | MouvementFideliteCreateWithoutTicketInput[] | MouvementFideliteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutTicketInput | MouvementFideliteCreateOrConnectWithoutTicketInput[]
    createMany?: MouvementFideliteCreateManyTicketInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput = {
    create?: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput> | SessionOrdinateurCreateWithoutTicketActuelInput[] | SessionOrdinateurUncheckedCreateWithoutTicketActuelInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutTicketActuelInput | SessionOrdinateurCreateOrConnectWithoutTicketActuelInput[]
    createMany?: SessionOrdinateurCreateManyTicketActuelInputEnvelope
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
  }

  export type MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput = {
    create?: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput> | MouvementFideliteCreateWithoutTicketInput[] | MouvementFideliteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutTicketInput | MouvementFideliteCreateOrConnectWithoutTicketInput[]
    createMany?: MouvementFideliteCreateManyTicketInputEnvelope
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
  }

  export type EnumStatutTicketFieldUpdateOperationsInput = {
    set?: $Enums.StatutTicket
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type CyberUpdateOneRequiredWithoutTicketsNestedInput = {
    create?: XOR<CyberCreateWithoutTicketsInput, CyberUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutTicketsInput
    upsert?: CyberUpsertWithoutTicketsInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutTicketsInput, CyberUpdateWithoutTicketsInput>, CyberUncheckedUpdateWithoutTicketsInput>
  }

  export type UserUpdateOneRequiredWithoutTicketsCreesNestedInput = {
    create?: XOR<UserCreateWithoutTicketsCreesInput, UserUncheckedCreateWithoutTicketsCreesInput>
    connectOrCreate?: UserCreateOrConnectWithoutTicketsCreesInput
    upsert?: UserUpsertWithoutTicketsCreesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTicketsCreesInput, UserUpdateWithoutTicketsCreesInput>, UserUncheckedUpdateWithoutTicketsCreesInput>
  }

  export type ClientFideliteUpdateOneWithoutTicketsNestedInput = {
    create?: XOR<ClientFideliteCreateWithoutTicketsInput, ClientFideliteUncheckedCreateWithoutTicketsInput>
    connectOrCreate?: ClientFideliteCreateOrConnectWithoutTicketsInput
    upsert?: ClientFideliteUpsertWithoutTicketsInput
    disconnect?: ClientFideliteWhereInput | boolean
    delete?: ClientFideliteWhereInput | boolean
    connect?: ClientFideliteWhereUniqueInput
    update?: XOR<XOR<ClientFideliteUpdateToOneWithWhereWithoutTicketsInput, ClientFideliteUpdateWithoutTicketsInput>, ClientFideliteUncheckedUpdateWithoutTicketsInput>
  }

  export type SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput = {
    create?: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput> | SessionOrdinateurCreateWithoutTicketActuelInput[] | SessionOrdinateurUncheckedCreateWithoutTicketActuelInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutTicketActuelInput | SessionOrdinateurCreateOrConnectWithoutTicketActuelInput[]
    upsert?: SessionOrdinateurUpsertWithWhereUniqueWithoutTicketActuelInput | SessionOrdinateurUpsertWithWhereUniqueWithoutTicketActuelInput[]
    createMany?: SessionOrdinateurCreateManyTicketActuelInputEnvelope
    set?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    disconnect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    delete?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    update?: SessionOrdinateurUpdateWithWhereUniqueWithoutTicketActuelInput | SessionOrdinateurUpdateWithWhereUniqueWithoutTicketActuelInput[]
    updateMany?: SessionOrdinateurUpdateManyWithWhereWithoutTicketActuelInput | SessionOrdinateurUpdateManyWithWhereWithoutTicketActuelInput[]
    deleteMany?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
  }

  export type MouvementFideliteUpdateManyWithoutTicketNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput> | MouvementFideliteCreateWithoutTicketInput[] | MouvementFideliteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutTicketInput | MouvementFideliteCreateOrConnectWithoutTicketInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutTicketInput | MouvementFideliteUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: MouvementFideliteCreateManyTicketInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutTicketInput | MouvementFideliteUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutTicketInput | MouvementFideliteUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput = {
    create?: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput> | SessionOrdinateurCreateWithoutTicketActuelInput[] | SessionOrdinateurUncheckedCreateWithoutTicketActuelInput[]
    connectOrCreate?: SessionOrdinateurCreateOrConnectWithoutTicketActuelInput | SessionOrdinateurCreateOrConnectWithoutTicketActuelInput[]
    upsert?: SessionOrdinateurUpsertWithWhereUniqueWithoutTicketActuelInput | SessionOrdinateurUpsertWithWhereUniqueWithoutTicketActuelInput[]
    createMany?: SessionOrdinateurCreateManyTicketActuelInputEnvelope
    set?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    disconnect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    delete?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    connect?: SessionOrdinateurWhereUniqueInput | SessionOrdinateurWhereUniqueInput[]
    update?: SessionOrdinateurUpdateWithWhereUniqueWithoutTicketActuelInput | SessionOrdinateurUpdateWithWhereUniqueWithoutTicketActuelInput[]
    updateMany?: SessionOrdinateurUpdateManyWithWhereWithoutTicketActuelInput | SessionOrdinateurUpdateManyWithWhereWithoutTicketActuelInput[]
    deleteMany?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput = {
    create?: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput> | MouvementFideliteCreateWithoutTicketInput[] | MouvementFideliteUncheckedCreateWithoutTicketInput[]
    connectOrCreate?: MouvementFideliteCreateOrConnectWithoutTicketInput | MouvementFideliteCreateOrConnectWithoutTicketInput[]
    upsert?: MouvementFideliteUpsertWithWhereUniqueWithoutTicketInput | MouvementFideliteUpsertWithWhereUniqueWithoutTicketInput[]
    createMany?: MouvementFideliteCreateManyTicketInputEnvelope
    set?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    disconnect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    delete?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    connect?: MouvementFideliteWhereUniqueInput | MouvementFideliteWhereUniqueInput[]
    update?: MouvementFideliteUpdateWithWhereUniqueWithoutTicketInput | MouvementFideliteUpdateWithWhereUniqueWithoutTicketInput[]
    updateMany?: MouvementFideliteUpdateManyWithWhereWithoutTicketInput | MouvementFideliteUpdateManyWithWhereWithoutTicketInput[]
    deleteMany?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
  }

  export type CyberCreateNestedOneWithoutSessionsInput = {
    create?: XOR<CyberCreateWithoutSessionsInput, CyberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutSessionsInput
    connect?: CyberWhereUniqueInput
  }

  export type TicketCreateNestedOneWithoutSessionsInput = {
    create?: XOR<TicketCreateWithoutSessionsInput, TicketUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionsInput
    connect?: TicketWhereUniqueInput
  }

  export type EnumStatutPosteFieldUpdateOperationsInput = {
    set?: $Enums.StatutPoste
  }

  export type NullableEnumTypeSessionFieldUpdateOperationsInput = {
    set?: $Enums.TypeSession | null
  }

  export type EnumSourceMiseAJourFieldUpdateOperationsInput = {
    set?: $Enums.SourceMiseAJour
  }

  export type CyberUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<CyberCreateWithoutSessionsInput, CyberUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutSessionsInput
    upsert?: CyberUpsertWithoutSessionsInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutSessionsInput, CyberUpdateWithoutSessionsInput>, CyberUncheckedUpdateWithoutSessionsInput>
  }

  export type TicketUpdateOneWithoutSessionsNestedInput = {
    create?: XOR<TicketCreateWithoutSessionsInput, TicketUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: TicketCreateOrConnectWithoutSessionsInput
    upsert?: TicketUpsertWithoutSessionsInput
    disconnect?: TicketWhereInput | boolean
    delete?: TicketWhereInput | boolean
    connect?: TicketWhereUniqueInput
    update?: XOR<XOR<TicketUpdateToOneWithWhereWithoutSessionsInput, TicketUpdateWithoutSessionsInput>, TicketUncheckedUpdateWithoutSessionsInput>
  }

  export type CyberCreateNestedOneWithoutPostePresencesInput = {
    create?: XOR<CyberCreateWithoutPostePresencesInput, CyberUncheckedCreateWithoutPostePresencesInput>
    connectOrCreate?: CyberCreateOrConnectWithoutPostePresencesInput
    connect?: CyberWhereUniqueInput
  }

  export type CyberUpdateOneRequiredWithoutPostePresencesNestedInput = {
    create?: XOR<CyberCreateWithoutPostePresencesInput, CyberUncheckedCreateWithoutPostePresencesInput>
    connectOrCreate?: CyberCreateOrConnectWithoutPostePresencesInput
    upsert?: CyberUpsertWithoutPostePresencesInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutPostePresencesInput, CyberUpdateWithoutPostePresencesInput>, CyberUncheckedUpdateWithoutPostePresencesInput>
  }

  export type CyberCreateNestedOneWithoutTransactionsInput = {
    create?: XOR<CyberCreateWithoutTransactionsInput, CyberUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutTransactionsInput
    connect?: CyberWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutTransactionsCaisseInput = {
    create?: XOR<UserCreateWithoutTransactionsCaisseInput, UserUncheckedCreateWithoutTransactionsCaisseInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsCaisseInput
    connect?: UserWhereUniqueInput
  }

  export type EnumTypePaiementFieldUpdateOperationsInput = {
    set?: $Enums.TypePaiement
  }

  export type CyberUpdateOneRequiredWithoutTransactionsNestedInput = {
    create?: XOR<CyberCreateWithoutTransactionsInput, CyberUncheckedCreateWithoutTransactionsInput>
    connectOrCreate?: CyberCreateOrConnectWithoutTransactionsInput
    upsert?: CyberUpsertWithoutTransactionsInput
    connect?: CyberWhereUniqueInput
    update?: XOR<XOR<CyberUpdateToOneWithWhereWithoutTransactionsInput, CyberUpdateWithoutTransactionsInput>, CyberUncheckedUpdateWithoutTransactionsInput>
  }

  export type UserUpdateOneRequiredWithoutTransactionsCaisseNestedInput = {
    create?: XOR<UserCreateWithoutTransactionsCaisseInput, UserUncheckedCreateWithoutTransactionsCaisseInput>
    connectOrCreate?: UserCreateOrConnectWithoutTransactionsCaisseInput
    upsert?: UserUpsertWithoutTransactionsCaisseInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTransactionsCaisseInput, UserUpdateWithoutTransactionsCaisseInput>, UserUncheckedUpdateWithoutTransactionsCaisseInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumTypeMouvementFideliteFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeMouvementFidelite | EnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel> | $Enums.TypeMouvementFidelite
  }

  export type NestedEnumTypeMouvementFideliteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeMouvementFidelite | EnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    in?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypeMouvementFidelite[] | ListEnumTypeMouvementFideliteFieldRefInput<$PrismaModel>
    not?: NestedEnumTypeMouvementFideliteWithAggregatesFilter<$PrismaModel> | $Enums.TypeMouvementFidelite
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel>
    _max?: NestedEnumTypeMouvementFideliteFilter<$PrismaModel>
  }

  export type NestedEnumStatutTicketFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutTicketFilter<$PrismaModel> | $Enums.StatutTicket
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutTicket | EnumStatutTicketFieldRefInput<$PrismaModel>
    in?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutTicket[] | ListEnumStatutTicketFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutTicketWithAggregatesFilter<$PrismaModel> | $Enums.StatutTicket
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutTicketFilter<$PrismaModel>
    _max?: NestedEnumStatutTicketFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedEnumStatutPosteFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPoste | EnumStatutPosteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPosteFilter<$PrismaModel> | $Enums.StatutPoste
  }

  export type NestedEnumTypeSessionNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSession | EnumTypeSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeSessionNullableFilter<$PrismaModel> | $Enums.TypeSession | null
  }

  export type NestedEnumSourceMiseAJourFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceMiseAJour | EnumSourceMiseAJourFieldRefInput<$PrismaModel>
    in?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceMiseAJourFilter<$PrismaModel> | $Enums.SourceMiseAJour
  }

  export type NestedEnumStatutPosteWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StatutPoste | EnumStatutPosteFieldRefInput<$PrismaModel>
    in?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    notIn?: $Enums.StatutPoste[] | ListEnumStatutPosteFieldRefInput<$PrismaModel>
    not?: NestedEnumStatutPosteWithAggregatesFilter<$PrismaModel> | $Enums.StatutPoste
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatutPosteFilter<$PrismaModel>
    _max?: NestedEnumStatutPosteFilter<$PrismaModel>
  }

  export type NestedEnumTypeSessionNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypeSession | EnumTypeSessionFieldRefInput<$PrismaModel> | null
    in?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.TypeSession[] | ListEnumTypeSessionFieldRefInput<$PrismaModel> | null
    not?: NestedEnumTypeSessionNullableWithAggregatesFilter<$PrismaModel> | $Enums.TypeSession | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumTypeSessionNullableFilter<$PrismaModel>
    _max?: NestedEnumTypeSessionNullableFilter<$PrismaModel>
  }

  export type NestedEnumSourceMiseAJourWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SourceMiseAJour | EnumSourceMiseAJourFieldRefInput<$PrismaModel>
    in?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    notIn?: $Enums.SourceMiseAJour[] | ListEnumSourceMiseAJourFieldRefInput<$PrismaModel>
    not?: NestedEnumSourceMiseAJourWithAggregatesFilter<$PrismaModel> | $Enums.SourceMiseAJour
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSourceMiseAJourFilter<$PrismaModel>
    _max?: NestedEnumSourceMiseAJourFilter<$PrismaModel>
  }

  export type NestedEnumTypePaiementFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePaiement | EnumTypePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePaiementFilter<$PrismaModel> | $Enums.TypePaiement
  }

  export type NestedEnumTypePaiementWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TypePaiement | EnumTypePaiementFieldRefInput<$PrismaModel>
    in?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    notIn?: $Enums.TypePaiement[] | ListEnumTypePaiementFieldRefInput<$PrismaModel>
    not?: NestedEnumTypePaiementWithAggregatesFilter<$PrismaModel> | $Enums.TypePaiement
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTypePaiementFilter<$PrismaModel>
    _max?: NestedEnumTypePaiementFilter<$PrismaModel>
  }

  export type UserCyberCreateWithoutCyberInput = {
    assignedAt?: Date | string
    user: UserCreateNestedOneWithoutCybersInput
  }

  export type UserCyberUncheckedCreateWithoutCyberInput = {
    userId: string
    assignedAt?: Date | string
  }

  export type UserCyberCreateOrConnectWithoutCyberInput = {
    where: UserCyberWhereUniqueInput
    create: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput>
  }

  export type UserCyberCreateManyCyberInputEnvelope = {
    data: UserCyberCreateManyCyberInput | UserCyberCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCyberInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    creePar: UserCreateNestedOneWithoutTicketsCreesInput
    clientFidelite?: ClientFideliteCreateNestedOneWithoutTicketsInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCyberInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCyberInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput>
  }

  export type TicketCreateManyCyberInputEnvelope = {
    data: TicketCreateManyCyberInput | TicketCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type SessionOrdinateurCreateWithoutCyberInput = {
    id?: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
    ticketActuel?: TicketCreateNestedOneWithoutSessionsInput
  }

  export type SessionOrdinateurUncheckedCreateWithoutCyberInput = {
    id?: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    ticketActuelId?: string | null
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type SessionOrdinateurCreateOrConnectWithoutCyberInput = {
    where: SessionOrdinateurWhereUniqueInput
    create: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput>
  }

  export type SessionOrdinateurCreateManyCyberInputEnvelope = {
    data: SessionOrdinateurCreateManyCyberInput | SessionOrdinateurCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type PostePresenceCreateWithoutCyberInput = {
    id?: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostePresenceUncheckedCreateWithoutCyberInput = {
    id?: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
  }

  export type PostePresenceCreateOrConnectWithoutCyberInput = {
    where: PostePresenceWhereUniqueInput
    create: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput>
  }

  export type PostePresenceCreateManyCyberInputEnvelope = {
    data: PostePresenceCreateManyCyberInput | PostePresenceCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCaisseCreateWithoutCyberInput = {
    id?: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    employe: UserCreateNestedOneWithoutTransactionsCaisseInput
  }

  export type TransactionCaisseUncheckedCreateWithoutCyberInput = {
    id?: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    employeId: string
  }

  export type TransactionCaisseCreateOrConnectWithoutCyberInput = {
    where: TransactionCaisseWhereUniqueInput
    create: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput>
  }

  export type TransactionCaisseCreateManyCyberInputEnvelope = {
    data: TransactionCaisseCreateManyCyberInput | TransactionCaisseCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type MouvementFideliteCreateWithoutCyberInput = {
    id?: string
    type: $Enums.TypeMouvementFidelite
    points: number
    description: string
    createdAt?: Date | string
    client: ClientFideliteCreateNestedOneWithoutMouvementsInput
    ticket?: TicketCreateNestedOneWithoutMouvementsInput
    employe: UserCreateNestedOneWithoutMouvementsFideliteInput
  }

  export type MouvementFideliteUncheckedCreateWithoutCyberInput = {
    id?: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteCreateOrConnectWithoutCyberInput = {
    where: MouvementFideliteWhereUniqueInput
    create: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput>
  }

  export type MouvementFideliteCreateManyCyberInputEnvelope = {
    data: MouvementFideliteCreateManyCyberInput | MouvementFideliteCreateManyCyberInput[]
    skipDuplicates?: boolean
  }

  export type UserCyberUpsertWithWhereUniqueWithoutCyberInput = {
    where: UserCyberWhereUniqueInput
    update: XOR<UserCyberUpdateWithoutCyberInput, UserCyberUncheckedUpdateWithoutCyberInput>
    create: XOR<UserCyberCreateWithoutCyberInput, UserCyberUncheckedCreateWithoutCyberInput>
  }

  export type UserCyberUpdateWithWhereUniqueWithoutCyberInput = {
    where: UserCyberWhereUniqueInput
    data: XOR<UserCyberUpdateWithoutCyberInput, UserCyberUncheckedUpdateWithoutCyberInput>
  }

  export type UserCyberUpdateManyWithWhereWithoutCyberInput = {
    where: UserCyberScalarWhereInput
    data: XOR<UserCyberUpdateManyMutationInput, UserCyberUncheckedUpdateManyWithoutCyberInput>
  }

  export type UserCyberScalarWhereInput = {
    AND?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
    OR?: UserCyberScalarWhereInput[]
    NOT?: UserCyberScalarWhereInput | UserCyberScalarWhereInput[]
    userId?: StringFilter<"UserCyber"> | string
    cyberId?: StringFilter<"UserCyber"> | string
    assignedAt?: DateTimeFilter<"UserCyber"> | Date | string
  }

  export type TicketUpsertWithWhereUniqueWithoutCyberInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCyberInput, TicketUncheckedUpdateWithoutCyberInput>
    create: XOR<TicketCreateWithoutCyberInput, TicketUncheckedCreateWithoutCyberInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCyberInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCyberInput, TicketUncheckedUpdateWithoutCyberInput>
  }

  export type TicketUpdateManyWithWhereWithoutCyberInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCyberInput>
  }

  export type TicketScalarWhereInput = {
    AND?: TicketScalarWhereInput | TicketScalarWhereInput[]
    OR?: TicketScalarWhereInput[]
    NOT?: TicketScalarWhereInput | TicketScalarWhereInput[]
    id?: StringFilter<"Ticket"> | string
    cyberId?: StringFilter<"Ticket"> | string
    codeUnique?: StringFilter<"Ticket"> | string
    tempsInitial?: IntFilter<"Ticket"> | number
    tempsRestant?: IntFilter<"Ticket"> | number
    statut?: EnumStatutTicketFilter<"Ticket"> | $Enums.StatutTicket
    creeParId?: StringFilter<"Ticket"> | string
    clientFideliteId?: StringNullableFilter<"Ticket"> | string | null
    pointsGagnes?: IntNullableFilter<"Ticket"> | number | null
    pointsUtilises?: IntNullableFilter<"Ticket"> | number | null
    minutesBonus?: IntFilter<"Ticket"> | number
    reductionAr?: DecimalNullableFilter<"Ticket"> | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFilter<"Ticket"> | Date | string
  }

  export type SessionOrdinateurUpsertWithWhereUniqueWithoutCyberInput = {
    where: SessionOrdinateurWhereUniqueInput
    update: XOR<SessionOrdinateurUpdateWithoutCyberInput, SessionOrdinateurUncheckedUpdateWithoutCyberInput>
    create: XOR<SessionOrdinateurCreateWithoutCyberInput, SessionOrdinateurUncheckedCreateWithoutCyberInput>
  }

  export type SessionOrdinateurUpdateWithWhereUniqueWithoutCyberInput = {
    where: SessionOrdinateurWhereUniqueInput
    data: XOR<SessionOrdinateurUpdateWithoutCyberInput, SessionOrdinateurUncheckedUpdateWithoutCyberInput>
  }

  export type SessionOrdinateurUpdateManyWithWhereWithoutCyberInput = {
    where: SessionOrdinateurScalarWhereInput
    data: XOR<SessionOrdinateurUpdateManyMutationInput, SessionOrdinateurUncheckedUpdateManyWithoutCyberInput>
  }

  export type SessionOrdinateurScalarWhereInput = {
    AND?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
    OR?: SessionOrdinateurScalarWhereInput[]
    NOT?: SessionOrdinateurScalarWhereInput | SessionOrdinateurScalarWhereInput[]
    id?: StringFilter<"SessionOrdinateur"> | string
    cyberId?: StringFilter<"SessionOrdinateur"> | string
    numeroPoste?: IntFilter<"SessionOrdinateur"> | number
    statut?: EnumStatutPosteFilter<"SessionOrdinateur"> | $Enums.StatutPoste
    ticketActuelId?: StringNullableFilter<"SessionOrdinateur"> | string | null
    typeSession?: EnumTypeSessionNullableFilter<"SessionOrdinateur"> | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string
    tempsDebut?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    tempsFin?: DateTimeNullableFilter<"SessionOrdinateur"> | Date | string | null
    montantDu?: DecimalNullableFilter<"SessionOrdinateur"> | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFilter<"SessionOrdinateur"> | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFilter<"SessionOrdinateur"> | Date | string
  }

  export type PostePresenceUpsertWithWhereUniqueWithoutCyberInput = {
    where: PostePresenceWhereUniqueInput
    update: XOR<PostePresenceUpdateWithoutCyberInput, PostePresenceUncheckedUpdateWithoutCyberInput>
    create: XOR<PostePresenceCreateWithoutCyberInput, PostePresenceUncheckedCreateWithoutCyberInput>
  }

  export type PostePresenceUpdateWithWhereUniqueWithoutCyberInput = {
    where: PostePresenceWhereUniqueInput
    data: XOR<PostePresenceUpdateWithoutCyberInput, PostePresenceUncheckedUpdateWithoutCyberInput>
  }

  export type PostePresenceUpdateManyWithWhereWithoutCyberInput = {
    where: PostePresenceScalarWhereInput
    data: XOR<PostePresenceUpdateManyMutationInput, PostePresenceUncheckedUpdateManyWithoutCyberInput>
  }

  export type PostePresenceScalarWhereInput = {
    AND?: PostePresenceScalarWhereInput | PostePresenceScalarWhereInput[]
    OR?: PostePresenceScalarWhereInput[]
    NOT?: PostePresenceScalarWhereInput | PostePresenceScalarWhereInput[]
    id?: StringFilter<"PostePresence"> | string
    cyberId?: StringFilter<"PostePresence"> | string
    numeroPoste?: IntFilter<"PostePresence"> | number
    connected?: BoolFilter<"PostePresence"> | boolean
    lastSeenAt?: DateTimeFilter<"PostePresence"> | Date | string
    updatedAt?: DateTimeFilter<"PostePresence"> | Date | string
  }

  export type TransactionCaisseUpsertWithWhereUniqueWithoutCyberInput = {
    where: TransactionCaisseWhereUniqueInput
    update: XOR<TransactionCaisseUpdateWithoutCyberInput, TransactionCaisseUncheckedUpdateWithoutCyberInput>
    create: XOR<TransactionCaisseCreateWithoutCyberInput, TransactionCaisseUncheckedCreateWithoutCyberInput>
  }

  export type TransactionCaisseUpdateWithWhereUniqueWithoutCyberInput = {
    where: TransactionCaisseWhereUniqueInput
    data: XOR<TransactionCaisseUpdateWithoutCyberInput, TransactionCaisseUncheckedUpdateWithoutCyberInput>
  }

  export type TransactionCaisseUpdateManyWithWhereWithoutCyberInput = {
    where: TransactionCaisseScalarWhereInput
    data: XOR<TransactionCaisseUpdateManyMutationInput, TransactionCaisseUncheckedUpdateManyWithoutCyberInput>
  }

  export type TransactionCaisseScalarWhereInput = {
    AND?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
    OR?: TransactionCaisseScalarWhereInput[]
    NOT?: TransactionCaisseScalarWhereInput | TransactionCaisseScalarWhereInput[]
    id?: StringFilter<"TransactionCaisse"> | string
    cyberId?: StringFilter<"TransactionCaisse"> | string
    montant?: DecimalFilter<"TransactionCaisse"> | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFilter<"TransactionCaisse"> | $Enums.TypePaiement
    description?: StringFilter<"TransactionCaisse"> | string
    dateTransaction?: DateTimeFilter<"TransactionCaisse"> | Date | string
    employeId?: StringFilter<"TransactionCaisse"> | string
  }

  export type MouvementFideliteUpsertWithWhereUniqueWithoutCyberInput = {
    where: MouvementFideliteWhereUniqueInput
    update: XOR<MouvementFideliteUpdateWithoutCyberInput, MouvementFideliteUncheckedUpdateWithoutCyberInput>
    create: XOR<MouvementFideliteCreateWithoutCyberInput, MouvementFideliteUncheckedCreateWithoutCyberInput>
  }

  export type MouvementFideliteUpdateWithWhereUniqueWithoutCyberInput = {
    where: MouvementFideliteWhereUniqueInput
    data: XOR<MouvementFideliteUpdateWithoutCyberInput, MouvementFideliteUncheckedUpdateWithoutCyberInput>
  }

  export type MouvementFideliteUpdateManyWithWhereWithoutCyberInput = {
    where: MouvementFideliteScalarWhereInput
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyWithoutCyberInput>
  }

  export type MouvementFideliteScalarWhereInput = {
    AND?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
    OR?: MouvementFideliteScalarWhereInput[]
    NOT?: MouvementFideliteScalarWhereInput | MouvementFideliteScalarWhereInput[]
    id?: StringFilter<"MouvementFidelite"> | string
    cyberId?: StringFilter<"MouvementFidelite"> | string
    clientId?: StringFilter<"MouvementFidelite"> | string
    type?: EnumTypeMouvementFideliteFilter<"MouvementFidelite"> | $Enums.TypeMouvementFidelite
    points?: IntFilter<"MouvementFidelite"> | number
    ticketId?: StringNullableFilter<"MouvementFidelite"> | string | null
    employeId?: StringFilter<"MouvementFidelite"> | string
    description?: StringFilter<"MouvementFidelite"> | string
    createdAt?: DateTimeFilter<"MouvementFidelite"> | Date | string
  }

  export type UserCyberCreateWithoutUserInput = {
    assignedAt?: Date | string
    cyber: CyberCreateNestedOneWithoutStaffAssignmentsInput
  }

  export type UserCyberUncheckedCreateWithoutUserInput = {
    cyberId: string
    assignedAt?: Date | string
  }

  export type UserCyberCreateOrConnectWithoutUserInput = {
    where: UserCyberWhereUniqueInput
    create: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput>
  }

  export type UserCyberCreateManyUserInputEnvelope = {
    data: UserCyberCreateManyUserInput | UserCyberCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TicketCreateWithoutCreeParInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutTicketsInput
    clientFidelite?: ClientFideliteCreateNestedOneWithoutTicketsInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutCreeParInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutCreeParInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput>
  }

  export type TicketCreateManyCreeParInputEnvelope = {
    data: TicketCreateManyCreeParInput | TicketCreateManyCreeParInput[]
    skipDuplicates?: boolean
  }

  export type TransactionCaisseCreateWithoutEmployeInput = {
    id?: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    cyber: CyberCreateNestedOneWithoutTransactionsInput
  }

  export type TransactionCaisseUncheckedCreateWithoutEmployeInput = {
    id?: string
    cyberId: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
  }

  export type TransactionCaisseCreateOrConnectWithoutEmployeInput = {
    where: TransactionCaisseWhereUniqueInput
    create: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput>
  }

  export type TransactionCaisseCreateManyEmployeInputEnvelope = {
    data: TransactionCaisseCreateManyEmployeInput | TransactionCaisseCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type MouvementFideliteCreateWithoutEmployeInput = {
    id?: string
    type: $Enums.TypeMouvementFidelite
    points: number
    description: string
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutMouvementsFideliteInput
    client: ClientFideliteCreateNestedOneWithoutMouvementsInput
    ticket?: TicketCreateNestedOneWithoutMouvementsInput
  }

  export type MouvementFideliteUncheckedCreateWithoutEmployeInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteCreateOrConnectWithoutEmployeInput = {
    where: MouvementFideliteWhereUniqueInput
    create: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput>
  }

  export type MouvementFideliteCreateManyEmployeInputEnvelope = {
    data: MouvementFideliteCreateManyEmployeInput | MouvementFideliteCreateManyEmployeInput[]
    skipDuplicates?: boolean
  }

  export type UserCyberUpsertWithWhereUniqueWithoutUserInput = {
    where: UserCyberWhereUniqueInput
    update: XOR<UserCyberUpdateWithoutUserInput, UserCyberUncheckedUpdateWithoutUserInput>
    create: XOR<UserCyberCreateWithoutUserInput, UserCyberUncheckedCreateWithoutUserInput>
  }

  export type UserCyberUpdateWithWhereUniqueWithoutUserInput = {
    where: UserCyberWhereUniqueInput
    data: XOR<UserCyberUpdateWithoutUserInput, UserCyberUncheckedUpdateWithoutUserInput>
  }

  export type UserCyberUpdateManyWithWhereWithoutUserInput = {
    where: UserCyberScalarWhereInput
    data: XOR<UserCyberUpdateManyMutationInput, UserCyberUncheckedUpdateManyWithoutUserInput>
  }

  export type TicketUpsertWithWhereUniqueWithoutCreeParInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutCreeParInput, TicketUncheckedUpdateWithoutCreeParInput>
    create: XOR<TicketCreateWithoutCreeParInput, TicketUncheckedCreateWithoutCreeParInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutCreeParInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutCreeParInput, TicketUncheckedUpdateWithoutCreeParInput>
  }

  export type TicketUpdateManyWithWhereWithoutCreeParInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutCreeParInput>
  }

  export type TransactionCaisseUpsertWithWhereUniqueWithoutEmployeInput = {
    where: TransactionCaisseWhereUniqueInput
    update: XOR<TransactionCaisseUpdateWithoutEmployeInput, TransactionCaisseUncheckedUpdateWithoutEmployeInput>
    create: XOR<TransactionCaisseCreateWithoutEmployeInput, TransactionCaisseUncheckedCreateWithoutEmployeInput>
  }

  export type TransactionCaisseUpdateWithWhereUniqueWithoutEmployeInput = {
    where: TransactionCaisseWhereUniqueInput
    data: XOR<TransactionCaisseUpdateWithoutEmployeInput, TransactionCaisseUncheckedUpdateWithoutEmployeInput>
  }

  export type TransactionCaisseUpdateManyWithWhereWithoutEmployeInput = {
    where: TransactionCaisseScalarWhereInput
    data: XOR<TransactionCaisseUpdateManyMutationInput, TransactionCaisseUncheckedUpdateManyWithoutEmployeInput>
  }

  export type MouvementFideliteUpsertWithWhereUniqueWithoutEmployeInput = {
    where: MouvementFideliteWhereUniqueInput
    update: XOR<MouvementFideliteUpdateWithoutEmployeInput, MouvementFideliteUncheckedUpdateWithoutEmployeInput>
    create: XOR<MouvementFideliteCreateWithoutEmployeInput, MouvementFideliteUncheckedCreateWithoutEmployeInput>
  }

  export type MouvementFideliteUpdateWithWhereUniqueWithoutEmployeInput = {
    where: MouvementFideliteWhereUniqueInput
    data: XOR<MouvementFideliteUpdateWithoutEmployeInput, MouvementFideliteUncheckedUpdateWithoutEmployeInput>
  }

  export type MouvementFideliteUpdateManyWithWhereWithoutEmployeInput = {
    where: MouvementFideliteScalarWhereInput
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyWithoutEmployeInput>
  }

  export type UserCreateWithoutCybersInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    ticketsCrees?: TicketCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutEmployeInput
  }

  export type UserUncheckedCreateWithoutCybersInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    ticketsCrees?: TicketUncheckedCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseUncheckedCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type UserCreateOrConnectWithoutCybersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCybersInput, UserUncheckedCreateWithoutCybersInput>
  }

  export type CyberCreateWithoutStaffAssignmentsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutStaffAssignmentsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutStaffAssignmentsInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutStaffAssignmentsInput, CyberUncheckedCreateWithoutStaffAssignmentsInput>
  }

  export type UserUpsertWithoutCybersInput = {
    update: XOR<UserUpdateWithoutCybersInput, UserUncheckedUpdateWithoutCybersInput>
    create: XOR<UserCreateWithoutCybersInput, UserUncheckedCreateWithoutCybersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCybersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCybersInput, UserUncheckedUpdateWithoutCybersInput>
  }

  export type UserUpdateWithoutCybersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsCrees?: TicketUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutEmployeNestedInput
  }

  export type UserUncheckedUpdateWithoutCybersInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketsCrees?: TicketUncheckedUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUncheckedUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type CyberUpsertWithoutStaffAssignmentsInput = {
    update: XOR<CyberUpdateWithoutStaffAssignmentsInput, CyberUncheckedUpdateWithoutStaffAssignmentsInput>
    create: XOR<CyberCreateWithoutStaffAssignmentsInput, CyberUncheckedCreateWithoutStaffAssignmentsInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutStaffAssignmentsInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutStaffAssignmentsInput, CyberUncheckedUpdateWithoutStaffAssignmentsInput>
  }

  export type CyberUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutStaffAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type TicketCreateWithoutClientFideliteInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutTicketsInput
    creePar: UserCreateNestedOneWithoutTicketsCreesInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutClientFideliteInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutClientFideliteInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput>
  }

  export type TicketCreateManyClientFideliteInputEnvelope = {
    data: TicketCreateManyClientFideliteInput | TicketCreateManyClientFideliteInput[]
    skipDuplicates?: boolean
  }

  export type MouvementFideliteCreateWithoutClientInput = {
    id?: string
    type: $Enums.TypeMouvementFidelite
    points: number
    description: string
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutMouvementsFideliteInput
    ticket?: TicketCreateNestedOneWithoutMouvementsInput
    employe: UserCreateNestedOneWithoutMouvementsFideliteInput
  }

  export type MouvementFideliteUncheckedCreateWithoutClientInput = {
    id?: string
    cyberId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteCreateOrConnectWithoutClientInput = {
    where: MouvementFideliteWhereUniqueInput
    create: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput>
  }

  export type MouvementFideliteCreateManyClientInputEnvelope = {
    data: MouvementFideliteCreateManyClientInput | MouvementFideliteCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TicketUpsertWithWhereUniqueWithoutClientFideliteInput = {
    where: TicketWhereUniqueInput
    update: XOR<TicketUpdateWithoutClientFideliteInput, TicketUncheckedUpdateWithoutClientFideliteInput>
    create: XOR<TicketCreateWithoutClientFideliteInput, TicketUncheckedCreateWithoutClientFideliteInput>
  }

  export type TicketUpdateWithWhereUniqueWithoutClientFideliteInput = {
    where: TicketWhereUniqueInput
    data: XOR<TicketUpdateWithoutClientFideliteInput, TicketUncheckedUpdateWithoutClientFideliteInput>
  }

  export type TicketUpdateManyWithWhereWithoutClientFideliteInput = {
    where: TicketScalarWhereInput
    data: XOR<TicketUpdateManyMutationInput, TicketUncheckedUpdateManyWithoutClientFideliteInput>
  }

  export type MouvementFideliteUpsertWithWhereUniqueWithoutClientInput = {
    where: MouvementFideliteWhereUniqueInput
    update: XOR<MouvementFideliteUpdateWithoutClientInput, MouvementFideliteUncheckedUpdateWithoutClientInput>
    create: XOR<MouvementFideliteCreateWithoutClientInput, MouvementFideliteUncheckedCreateWithoutClientInput>
  }

  export type MouvementFideliteUpdateWithWhereUniqueWithoutClientInput = {
    where: MouvementFideliteWhereUniqueInput
    data: XOR<MouvementFideliteUpdateWithoutClientInput, MouvementFideliteUncheckedUpdateWithoutClientInput>
  }

  export type MouvementFideliteUpdateManyWithWhereWithoutClientInput = {
    where: MouvementFideliteScalarWhereInput
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyWithoutClientInput>
  }

  export type CyberCreateWithoutMouvementsFideliteInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    tickets?: TicketCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutMouvementsFideliteInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutMouvementsFideliteInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutMouvementsFideliteInput, CyberUncheckedCreateWithoutMouvementsFideliteInput>
  }

  export type ClientFideliteCreateWithoutMouvementsInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketCreateNestedManyWithoutClientFideliteInput
  }

  export type ClientFideliteUncheckedCreateWithoutMouvementsInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    tickets?: TicketUncheckedCreateNestedManyWithoutClientFideliteInput
  }

  export type ClientFideliteCreateOrConnectWithoutMouvementsInput = {
    where: ClientFideliteWhereUniqueInput
    create: XOR<ClientFideliteCreateWithoutMouvementsInput, ClientFideliteUncheckedCreateWithoutMouvementsInput>
  }

  export type TicketCreateWithoutMouvementsInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutTicketsInput
    creePar: UserCreateNestedOneWithoutTicketsCreesInput
    clientFidelite?: ClientFideliteCreateNestedOneWithoutTicketsInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutTicketActuelInput
  }

  export type TicketUncheckedCreateWithoutMouvementsInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutTicketActuelInput
  }

  export type TicketCreateOrConnectWithoutMouvementsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutMouvementsInput, TicketUncheckedCreateWithoutMouvementsInput>
  }

  export type UserCreateWithoutMouvementsFideliteInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseCreateNestedManyWithoutEmployeInput
  }

  export type UserUncheckedCreateWithoutMouvementsFideliteInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberUncheckedCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketUncheckedCreateNestedManyWithoutCreeParInput
    transactionsCaisse?: TransactionCaisseUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type UserCreateOrConnectWithoutMouvementsFideliteInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMouvementsFideliteInput, UserUncheckedCreateWithoutMouvementsFideliteInput>
  }

  export type CyberUpsertWithoutMouvementsFideliteInput = {
    update: XOR<CyberUpdateWithoutMouvementsFideliteInput, CyberUncheckedUpdateWithoutMouvementsFideliteInput>
    create: XOR<CyberCreateWithoutMouvementsFideliteInput, CyberUncheckedCreateWithoutMouvementsFideliteInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutMouvementsFideliteInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutMouvementsFideliteInput, CyberUncheckedUpdateWithoutMouvementsFideliteInput>
  }

  export type CyberUpdateWithoutMouvementsFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutMouvementsFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type ClientFideliteUpsertWithoutMouvementsInput = {
    update: XOR<ClientFideliteUpdateWithoutMouvementsInput, ClientFideliteUncheckedUpdateWithoutMouvementsInput>
    create: XOR<ClientFideliteCreateWithoutMouvementsInput, ClientFideliteUncheckedCreateWithoutMouvementsInput>
    where?: ClientFideliteWhereInput
  }

  export type ClientFideliteUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: ClientFideliteWhereInput
    data: XOR<ClientFideliteUpdateWithoutMouvementsInput, ClientFideliteUncheckedUpdateWithoutMouvementsInput>
  }

  export type ClientFideliteUpdateWithoutMouvementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUpdateManyWithoutClientFideliteNestedInput
  }

  export type ClientFideliteUncheckedUpdateWithoutMouvementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    tickets?: TicketUncheckedUpdateManyWithoutClientFideliteNestedInput
  }

  export type TicketUpsertWithoutMouvementsInput = {
    update: XOR<TicketUpdateWithoutMouvementsInput, TicketUncheckedUpdateWithoutMouvementsInput>
    create: XOR<TicketCreateWithoutMouvementsInput, TicketUncheckedCreateWithoutMouvementsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutMouvementsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutMouvementsInput, TicketUncheckedUpdateWithoutMouvementsInput>
  }

  export type TicketUpdateWithoutMouvementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTicketsNestedInput
    creePar?: UserUpdateOneRequiredWithoutTicketsCreesNestedInput
    clientFidelite?: ClientFideliteUpdateOneWithoutTicketsNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput
  }

  export type TicketUncheckedUpdateWithoutMouvementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput
  }

  export type UserUpsertWithoutMouvementsFideliteInput = {
    update: XOR<UserUpdateWithoutMouvementsFideliteInput, UserUncheckedUpdateWithoutMouvementsFideliteInput>
    create: XOR<UserCreateWithoutMouvementsFideliteInput, UserUncheckedCreateWithoutMouvementsFideliteInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMouvementsFideliteInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMouvementsFideliteInput, UserUncheckedUpdateWithoutMouvementsFideliteInput>
  }

  export type UserUpdateWithoutMouvementsFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUpdateManyWithoutEmployeNestedInput
  }

  export type UserUncheckedUpdateWithoutMouvementsFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUncheckedUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUncheckedUpdateManyWithoutCreeParNestedInput
    transactionsCaisse?: TransactionCaisseUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type CyberCreateWithoutTicketsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutTicketsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutTicketsInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutTicketsInput, CyberUncheckedCreateWithoutTicketsInput>
  }

  export type UserCreateWithoutTicketsCreesInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberCreateNestedManyWithoutUserInput
    transactionsCaisse?: TransactionCaisseCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutEmployeInput
  }

  export type UserUncheckedCreateWithoutTicketsCreesInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberUncheckedCreateNestedManyWithoutUserInput
    transactionsCaisse?: TransactionCaisseUncheckedCreateNestedManyWithoutEmployeInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type UserCreateOrConnectWithoutTicketsCreesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTicketsCreesInput, UserUncheckedCreateWithoutTicketsCreesInput>
  }

  export type ClientFideliteCreateWithoutTicketsInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mouvements?: MouvementFideliteCreateNestedManyWithoutClientInput
  }

  export type ClientFideliteUncheckedCreateWithoutTicketsInput = {
    id?: string
    telephone: string
    nom?: string | null
    isActive?: boolean
    createdAt?: Date | string
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientFideliteCreateOrConnectWithoutTicketsInput = {
    where: ClientFideliteWhereUniqueInput
    create: XOR<ClientFideliteCreateWithoutTicketsInput, ClientFideliteUncheckedCreateWithoutTicketsInput>
  }

  export type SessionOrdinateurCreateWithoutTicketActuelInput = {
    id?: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
    cyber: CyberCreateNestedOneWithoutSessionsInput
  }

  export type SessionOrdinateurUncheckedCreateWithoutTicketActuelInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type SessionOrdinateurCreateOrConnectWithoutTicketActuelInput = {
    where: SessionOrdinateurWhereUniqueInput
    create: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput>
  }

  export type SessionOrdinateurCreateManyTicketActuelInputEnvelope = {
    data: SessionOrdinateurCreateManyTicketActuelInput | SessionOrdinateurCreateManyTicketActuelInput[]
    skipDuplicates?: boolean
  }

  export type MouvementFideliteCreateWithoutTicketInput = {
    id?: string
    type: $Enums.TypeMouvementFidelite
    points: number
    description: string
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutMouvementsFideliteInput
    client: ClientFideliteCreateNestedOneWithoutMouvementsInput
    employe: UserCreateNestedOneWithoutMouvementsFideliteInput
  }

  export type MouvementFideliteUncheckedCreateWithoutTicketInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type MouvementFideliteCreateOrConnectWithoutTicketInput = {
    where: MouvementFideliteWhereUniqueInput
    create: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput>
  }

  export type MouvementFideliteCreateManyTicketInputEnvelope = {
    data: MouvementFideliteCreateManyTicketInput | MouvementFideliteCreateManyTicketInput[]
    skipDuplicates?: boolean
  }

  export type CyberUpsertWithoutTicketsInput = {
    update: XOR<CyberUpdateWithoutTicketsInput, CyberUncheckedUpdateWithoutTicketsInput>
    create: XOR<CyberCreateWithoutTicketsInput, CyberUncheckedCreateWithoutTicketsInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutTicketsInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutTicketsInput, CyberUncheckedUpdateWithoutTicketsInput>
  }

  export type CyberUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type UserUpsertWithoutTicketsCreesInput = {
    update: XOR<UserUpdateWithoutTicketsCreesInput, UserUncheckedUpdateWithoutTicketsCreesInput>
    create: XOR<UserCreateWithoutTicketsCreesInput, UserUncheckedCreateWithoutTicketsCreesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTicketsCreesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTicketsCreesInput, UserUncheckedUpdateWithoutTicketsCreesInput>
  }

  export type UserUpdateWithoutTicketsCreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUpdateManyWithoutUserNestedInput
    transactionsCaisse?: TransactionCaisseUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutEmployeNestedInput
  }

  export type UserUncheckedUpdateWithoutTicketsCreesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUncheckedUpdateManyWithoutUserNestedInput
    transactionsCaisse?: TransactionCaisseUncheckedUpdateManyWithoutEmployeNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type ClientFideliteUpsertWithoutTicketsInput = {
    update: XOR<ClientFideliteUpdateWithoutTicketsInput, ClientFideliteUncheckedUpdateWithoutTicketsInput>
    create: XOR<ClientFideliteCreateWithoutTicketsInput, ClientFideliteUncheckedCreateWithoutTicketsInput>
    where?: ClientFideliteWhereInput
  }

  export type ClientFideliteUpdateToOneWithWhereWithoutTicketsInput = {
    where?: ClientFideliteWhereInput
    data: XOR<ClientFideliteUpdateWithoutTicketsInput, ClientFideliteUncheckedUpdateWithoutTicketsInput>
  }

  export type ClientFideliteUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mouvements?: MouvementFideliteUpdateManyWithoutClientNestedInput
  }

  export type ClientFideliteUncheckedUpdateWithoutTicketsInput = {
    id?: StringFieldUpdateOperationsInput | string
    telephone?: StringFieldUpdateOperationsInput | string
    nom?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutClientNestedInput
  }

  export type SessionOrdinateurUpsertWithWhereUniqueWithoutTicketActuelInput = {
    where: SessionOrdinateurWhereUniqueInput
    update: XOR<SessionOrdinateurUpdateWithoutTicketActuelInput, SessionOrdinateurUncheckedUpdateWithoutTicketActuelInput>
    create: XOR<SessionOrdinateurCreateWithoutTicketActuelInput, SessionOrdinateurUncheckedCreateWithoutTicketActuelInput>
  }

  export type SessionOrdinateurUpdateWithWhereUniqueWithoutTicketActuelInput = {
    where: SessionOrdinateurWhereUniqueInput
    data: XOR<SessionOrdinateurUpdateWithoutTicketActuelInput, SessionOrdinateurUncheckedUpdateWithoutTicketActuelInput>
  }

  export type SessionOrdinateurUpdateManyWithWhereWithoutTicketActuelInput = {
    where: SessionOrdinateurScalarWhereInput
    data: XOR<SessionOrdinateurUpdateManyMutationInput, SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelInput>
  }

  export type MouvementFideliteUpsertWithWhereUniqueWithoutTicketInput = {
    where: MouvementFideliteWhereUniqueInput
    update: XOR<MouvementFideliteUpdateWithoutTicketInput, MouvementFideliteUncheckedUpdateWithoutTicketInput>
    create: XOR<MouvementFideliteCreateWithoutTicketInput, MouvementFideliteUncheckedCreateWithoutTicketInput>
  }

  export type MouvementFideliteUpdateWithWhereUniqueWithoutTicketInput = {
    where: MouvementFideliteWhereUniqueInput
    data: XOR<MouvementFideliteUpdateWithoutTicketInput, MouvementFideliteUncheckedUpdateWithoutTicketInput>
  }

  export type MouvementFideliteUpdateManyWithWhereWithoutTicketInput = {
    where: MouvementFideliteScalarWhereInput
    data: XOR<MouvementFideliteUpdateManyMutationInput, MouvementFideliteUncheckedUpdateManyWithoutTicketInput>
  }

  export type CyberCreateWithoutSessionsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    tickets?: TicketCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutSessionsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutSessionsInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutSessionsInput, CyberUncheckedCreateWithoutSessionsInput>
  }

  export type TicketCreateWithoutSessionsInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    cyber: CyberCreateNestedOneWithoutTicketsInput
    creePar: UserCreateNestedOneWithoutTicketsCreesInput
    clientFidelite?: ClientFideliteCreateNestedOneWithoutTicketsInput
    mouvements?: MouvementFideliteCreateNestedManyWithoutTicketInput
  }

  export type TicketUncheckedCreateWithoutSessionsInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    mouvements?: MouvementFideliteUncheckedCreateNestedManyWithoutTicketInput
  }

  export type TicketCreateOrConnectWithoutSessionsInput = {
    where: TicketWhereUniqueInput
    create: XOR<TicketCreateWithoutSessionsInput, TicketUncheckedCreateWithoutSessionsInput>
  }

  export type CyberUpsertWithoutSessionsInput = {
    update: XOR<CyberUpdateWithoutSessionsInput, CyberUncheckedUpdateWithoutSessionsInput>
    create: XOR<CyberCreateWithoutSessionsInput, CyberUncheckedCreateWithoutSessionsInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutSessionsInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutSessionsInput, CyberUncheckedUpdateWithoutSessionsInput>
  }

  export type CyberUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type TicketUpsertWithoutSessionsInput = {
    update: XOR<TicketUpdateWithoutSessionsInput, TicketUncheckedUpdateWithoutSessionsInput>
    create: XOR<TicketCreateWithoutSessionsInput, TicketUncheckedCreateWithoutSessionsInput>
    where?: TicketWhereInput
  }

  export type TicketUpdateToOneWithWhereWithoutSessionsInput = {
    where?: TicketWhereInput
    data: XOR<TicketUpdateWithoutSessionsInput, TicketUncheckedUpdateWithoutSessionsInput>
  }

  export type TicketUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTicketsNestedInput
    creePar?: UserUpdateOneRequiredWithoutTicketsCreesNestedInput
    clientFidelite?: ClientFideliteUpdateOneWithoutTicketsNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type CyberCreateWithoutPostePresencesInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    tickets?: TicketCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutPostePresencesInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    transactions?: TransactionCaisseUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutPostePresencesInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutPostePresencesInput, CyberUncheckedCreateWithoutPostePresencesInput>
  }

  export type CyberUpsertWithoutPostePresencesInput = {
    update: XOR<CyberUpdateWithoutPostePresencesInput, CyberUncheckedUpdateWithoutPostePresencesInput>
    create: XOR<CyberCreateWithoutPostePresencesInput, CyberUncheckedCreateWithoutPostePresencesInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutPostePresencesInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutPostePresencesInput, CyberUncheckedUpdateWithoutPostePresencesInput>
  }

  export type CyberUpdateWithoutPostePresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutPostePresencesInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    transactions?: TransactionCaisseUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type CyberCreateWithoutTransactionsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberCreateNestedManyWithoutCyberInput
    tickets?: TicketCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutCyberInput
  }

  export type CyberUncheckedCreateWithoutTransactionsInput = {
    id?: string
    nom: string
    nombrePostes?: number
    dureesTicket?: CyberCreatedureesTicketInput | number[]
    prixParMinute?: Decimal | DecimalJsLike | number | string
    isActive?: boolean
    archivedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    staffAssignments?: UserCyberUncheckedCreateNestedManyWithoutCyberInput
    tickets?: TicketUncheckedCreateNestedManyWithoutCyberInput
    sessions?: SessionOrdinateurUncheckedCreateNestedManyWithoutCyberInput
    postePresences?: PostePresenceUncheckedCreateNestedManyWithoutCyberInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutCyberInput
  }

  export type CyberCreateOrConnectWithoutTransactionsInput = {
    where: CyberWhereUniqueInput
    create: XOR<CyberCreateWithoutTransactionsInput, CyberUncheckedCreateWithoutTransactionsInput>
  }

  export type UserCreateWithoutTransactionsCaisseInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketCreateNestedManyWithoutCreeParInput
    mouvementsFidelite?: MouvementFideliteCreateNestedManyWithoutEmployeInput
  }

  export type UserUncheckedCreateWithoutTransactionsCaisseInput = {
    id?: string
    username: string
    email?: string | null
    supabaseUserId?: string | null
    passwordHash: string
    role?: $Enums.Role
    isActive?: boolean
    createdAt?: Date | string
    cybers?: UserCyberUncheckedCreateNestedManyWithoutUserInput
    ticketsCrees?: TicketUncheckedCreateNestedManyWithoutCreeParInput
    mouvementsFidelite?: MouvementFideliteUncheckedCreateNestedManyWithoutEmployeInput
  }

  export type UserCreateOrConnectWithoutTransactionsCaisseInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTransactionsCaisseInput, UserUncheckedCreateWithoutTransactionsCaisseInput>
  }

  export type CyberUpsertWithoutTransactionsInput = {
    update: XOR<CyberUpdateWithoutTransactionsInput, CyberUncheckedUpdateWithoutTransactionsInput>
    create: XOR<CyberCreateWithoutTransactionsInput, CyberUncheckedCreateWithoutTransactionsInput>
    where?: CyberWhereInput
  }

  export type CyberUpdateToOneWithWhereWithoutTransactionsInput = {
    where?: CyberWhereInput
    data: XOR<CyberUpdateWithoutTransactionsInput, CyberUncheckedUpdateWithoutTransactionsInput>
  }

  export type CyberUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUpdateManyWithoutCyberNestedInput
    tickets?: TicketUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutCyberNestedInput
  }

  export type CyberUncheckedUpdateWithoutTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    nom?: StringFieldUpdateOperationsInput | string
    nombrePostes?: IntFieldUpdateOperationsInput | number
    dureesTicket?: CyberUpdatedureesTicketInput | number[]
    prixParMinute?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    archivedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    staffAssignments?: UserCyberUncheckedUpdateManyWithoutCyberNestedInput
    tickets?: TicketUncheckedUpdateManyWithoutCyberNestedInput
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutCyberNestedInput
    postePresences?: PostePresenceUncheckedUpdateManyWithoutCyberNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutCyberNestedInput
  }

  export type UserUpsertWithoutTransactionsCaisseInput = {
    update: XOR<UserUpdateWithoutTransactionsCaisseInput, UserUncheckedUpdateWithoutTransactionsCaisseInput>
    create: XOR<UserCreateWithoutTransactionsCaisseInput, UserUncheckedCreateWithoutTransactionsCaisseInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTransactionsCaisseInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTransactionsCaisseInput, UserUncheckedUpdateWithoutTransactionsCaisseInput>
  }

  export type UserUpdateWithoutTransactionsCaisseInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUpdateManyWithoutCreeParNestedInput
    mouvementsFidelite?: MouvementFideliteUpdateManyWithoutEmployeNestedInput
  }

  export type UserUncheckedUpdateWithoutTransactionsCaisseInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    supabaseUserId?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cybers?: UserCyberUncheckedUpdateManyWithoutUserNestedInput
    ticketsCrees?: TicketUncheckedUpdateManyWithoutCreeParNestedInput
    mouvementsFidelite?: MouvementFideliteUncheckedUpdateManyWithoutEmployeNestedInput
  }

  export type UserCyberCreateManyCyberInput = {
    userId: string
    assignedAt?: Date | string
  }

  export type TicketCreateManyCyberInput = {
    id?: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type SessionOrdinateurCreateManyCyberInput = {
    id?: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    ticketActuelId?: string | null
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type PostePresenceCreateManyCyberInput = {
    id?: string
    numeroPoste: number
    connected?: boolean
    lastSeenAt?: Date | string
    updatedAt?: Date | string
  }

  export type TransactionCaisseCreateManyCyberInput = {
    id?: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
    employeId: string
  }

  export type MouvementFideliteCreateManyCyberInput = {
    id?: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type UserCyberUpdateWithoutCyberInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutCybersNestedInput
  }

  export type UserCyberUncheckedUpdateWithoutCyberInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberUncheckedUpdateManyWithoutCyberInput = {
    userId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creePar?: UserUpdateOneRequiredWithoutTicketsCreesNestedInput
    clientFidelite?: ClientFideliteUpdateOneWithoutTicketsNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticketActuel?: TicketUpdateOneWithoutSessionsNestedInput
  }

  export type SessionOrdinateurUncheckedUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    ticketActuelId?: NullableStringFieldUpdateOperationsInput | string | null
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurUncheckedUpdateManyWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    ticketActuelId?: NullableStringFieldUpdateOperationsInput | string | null
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceUncheckedUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostePresenceUncheckedUpdateManyWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    connected?: BoolFieldUpdateOperationsInput | boolean
    lastSeenAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCaisseUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    employe?: UserUpdateOneRequiredWithoutTransactionsCaisseNestedInput
  }

  export type TransactionCaisseUncheckedUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: StringFieldUpdateOperationsInput | string
  }

  export type TransactionCaisseUncheckedUpdateManyWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    employeId?: StringFieldUpdateOperationsInput | string
  }

  export type MouvementFideliteUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientFideliteUpdateOneRequiredWithoutMouvementsNestedInput
    ticket?: TicketUpdateOneWithoutMouvementsNestedInput
    employe?: UserUpdateOneRequiredWithoutMouvementsFideliteNestedInput
  }

  export type MouvementFideliteUncheckedUpdateWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutCyberInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberCreateManyUserInput = {
    cyberId: string
    assignedAt?: Date | string
  }

  export type TicketCreateManyCreeParInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    clientFideliteId?: string | null
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type TransactionCaisseCreateManyEmployeInput = {
    id?: string
    cyberId: string
    montant: Decimal | DecimalJsLike | number | string
    typePaiement: $Enums.TypePaiement
    description: string
    dateTransaction?: Date | string
  }

  export type MouvementFideliteCreateManyEmployeInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type UserCyberUpdateWithoutUserInput = {
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutStaffAssignmentsNestedInput
  }

  export type UserCyberUncheckedUpdateWithoutUserInput = {
    cyberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCyberUncheckedUpdateManyWithoutUserInput = {
    cyberId?: StringFieldUpdateOperationsInput | string
    assignedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketUpdateWithoutCreeParInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTicketsNestedInput
    clientFidelite?: ClientFideliteUpdateOneWithoutTicketsNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutCreeParInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutCreeParInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    clientFideliteId?: NullableStringFieldUpdateOperationsInput | string | null
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCaisseUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTransactionsNestedInput
  }

  export type TransactionCaisseUncheckedUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TransactionCaisseUncheckedUpdateManyWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    montant?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    typePaiement?: EnumTypePaiementFieldUpdateOperationsInput | $Enums.TypePaiement
    description?: StringFieldUpdateOperationsInput | string
    dateTransaction?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutMouvementsFideliteNestedInput
    client?: ClientFideliteUpdateOneRequiredWithoutMouvementsNestedInput
    ticket?: TicketUpdateOneWithoutMouvementsNestedInput
  }

  export type MouvementFideliteUncheckedUpdateWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutEmployeInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TicketCreateManyClientFideliteInput = {
    id?: string
    cyberId: string
    codeUnique: string
    tempsInitial: number
    tempsRestant: number
    statut?: $Enums.StatutTicket
    creeParId: string
    pointsGagnes?: number | null
    pointsUtilises?: number | null
    minutesBonus?: number
    reductionAr?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
  }

  export type MouvementFideliteCreateManyClientInput = {
    id?: string
    cyberId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    ticketId?: string | null
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type TicketUpdateWithoutClientFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutTicketsNestedInput
    creePar?: UserUpdateOneRequiredWithoutTicketsCreesNestedInput
    sessions?: SessionOrdinateurUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateWithoutClientFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelNestedInput
    mouvements?: MouvementFideliteUncheckedUpdateManyWithoutTicketNestedInput
  }

  export type TicketUncheckedUpdateManyWithoutClientFideliteInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    codeUnique?: StringFieldUpdateOperationsInput | string
    tempsInitial?: IntFieldUpdateOperationsInput | number
    tempsRestant?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutTicketFieldUpdateOperationsInput | $Enums.StatutTicket
    creeParId?: StringFieldUpdateOperationsInput | string
    pointsGagnes?: NullableIntFieldUpdateOperationsInput | number | null
    pointsUtilises?: NullableIntFieldUpdateOperationsInput | number | null
    minutesBonus?: IntFieldUpdateOperationsInput | number
    reductionAr?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutMouvementsFideliteNestedInput
    ticket?: TicketUpdateOneWithoutMouvementsNestedInput
    employe?: UserUpdateOneRequiredWithoutMouvementsFideliteNestedInput
  }

  export type MouvementFideliteUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    ticketId?: NullableStringFieldUpdateOperationsInput | string | null
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurCreateManyTicketActuelInput = {
    id?: string
    cyberId: string
    numeroPoste: number
    statut?: $Enums.StatutPoste
    typeSession?: $Enums.TypeSession | null
    baseTarifHoraire?: Decimal | DecimalJsLike | number | string
    tempsDebut?: Date | string | null
    tempsFin?: Date | string | null
    montantDu?: Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: $Enums.SourceMiseAJour
    updatedAt?: Date | string
  }

  export type MouvementFideliteCreateManyTicketInput = {
    id?: string
    cyberId: string
    clientId: string
    type: $Enums.TypeMouvementFidelite
    points: number
    employeId: string
    description: string
    createdAt?: Date | string
  }

  export type SessionOrdinateurUpdateWithoutTicketActuelInput = {
    id?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionOrdinateurUncheckedUpdateWithoutTicketActuelInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionOrdinateurUncheckedUpdateManyWithoutTicketActuelInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    numeroPoste?: IntFieldUpdateOperationsInput | number
    statut?: EnumStatutPosteFieldUpdateOperationsInput | $Enums.StatutPoste
    typeSession?: NullableEnumTypeSessionFieldUpdateOperationsInput | $Enums.TypeSession | null
    baseTarifHoraire?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    tempsDebut?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    tempsFin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    montantDu?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    sourceMiseAJour?: EnumSourceMiseAJourFieldUpdateOperationsInput | $Enums.SourceMiseAJour
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cyber?: CyberUpdateOneRequiredWithoutMouvementsFideliteNestedInput
    client?: ClientFideliteUpdateOneRequiredWithoutMouvementsNestedInput
    employe?: UserUpdateOneRequiredWithoutMouvementsFideliteNestedInput
  }

  export type MouvementFideliteUncheckedUpdateWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MouvementFideliteUncheckedUpdateManyWithoutTicketInput = {
    id?: StringFieldUpdateOperationsInput | string
    cyberId?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    type?: EnumTypeMouvementFideliteFieldUpdateOperationsInput | $Enums.TypeMouvementFidelite
    points?: IntFieldUpdateOperationsInput | number
    employeId?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}