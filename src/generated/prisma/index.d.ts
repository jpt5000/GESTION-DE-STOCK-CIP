
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
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Movement
 * 
 */
export type Movement = $Result.DefaultSelection<Prisma.$MovementPayload>
/**
 * Model StockEntry
 * 
 */
export type StockEntry = $Result.DefaultSelection<Prisma.$StockEntryPayload>
/**
 * Model StockExit
 * 
 */
export type StockExit = $Result.DefaultSelection<Prisma.$StockExitPayload>
/**
 * Model StockExitDetail
 * 
 */
export type StockExitDetail = $Result.DefaultSelection<Prisma.$StockExitDetailPayload>
/**
 * Model StockExitDocument
 * 
 */
export type StockExitDocument = $Result.DefaultSelection<Prisma.$StockExitDocumentPayload>
/**
 * Model StockExitDocumentLine
 * 
 */
export type StockExitDocumentLine = $Result.DefaultSelection<Prisma.$StockExitDocumentLinePayload>
/**
 * Model StockExitDocumentLineDetail
 * 
 */
export type StockExitDocumentLineDetail = $Result.DefaultSelection<Prisma.$StockExitDocumentLineDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs>;

  /**
   * `prisma.movement`: Exposes CRUD operations for the **Movement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Movements
    * const movements = await prisma.movement.findMany()
    * ```
    */
  get movement(): Prisma.MovementDelegate<ExtArgs>;

  /**
   * `prisma.stockEntry`: Exposes CRUD operations for the **StockEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockEntries
    * const stockEntries = await prisma.stockEntry.findMany()
    * ```
    */
  get stockEntry(): Prisma.StockEntryDelegate<ExtArgs>;

  /**
   * `prisma.stockExit`: Exposes CRUD operations for the **StockExit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExits
    * const stockExits = await prisma.stockExit.findMany()
    * ```
    */
  get stockExit(): Prisma.StockExitDelegate<ExtArgs>;

  /**
   * `prisma.stockExitDetail`: Exposes CRUD operations for the **StockExitDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExitDetails
    * const stockExitDetails = await prisma.stockExitDetail.findMany()
    * ```
    */
  get stockExitDetail(): Prisma.StockExitDetailDelegate<ExtArgs>;

  /**
   * `prisma.stockExitDocument`: Exposes CRUD operations for the **StockExitDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExitDocuments
    * const stockExitDocuments = await prisma.stockExitDocument.findMany()
    * ```
    */
  get stockExitDocument(): Prisma.StockExitDocumentDelegate<ExtArgs>;

  /**
   * `prisma.stockExitDocumentLine`: Exposes CRUD operations for the **StockExitDocumentLine** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExitDocumentLines
    * const stockExitDocumentLines = await prisma.stockExitDocumentLine.findMany()
    * ```
    */
  get stockExitDocumentLine(): Prisma.StockExitDocumentLineDelegate<ExtArgs>;

  /**
   * `prisma.stockExitDocumentLineDetail`: Exposes CRUD operations for the **StockExitDocumentLineDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExitDocumentLineDetails
    * const stockExitDocumentLineDetails = await prisma.stockExitDocumentLineDetail.findMany()
    * ```
    */
  get stockExitDocumentLineDetail(): Prisma.StockExitDocumentLineDetailDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Category: 'Category',
    Supplier: 'Supplier',
    Product: 'Product',
    Movement: 'Movement',
    StockEntry: 'StockEntry',
    StockExit: 'StockExit',
    StockExitDetail: 'StockExitDetail',
    StockExitDocument: 'StockExitDocument',
    StockExitDocumentLine: 'StockExitDocumentLine',
    StockExitDocumentLineDetail: 'StockExitDocumentLineDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "category" | "supplier" | "product" | "movement" | "stockEntry" | "stockExit" | "stockExitDetail" | "stockExitDocument" | "stockExitDocumentLine" | "stockExitDocumentLineDetail"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Movement: {
        payload: Prisma.$MovementPayload<ExtArgs>
        fields: Prisma.MovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findFirst: {
            args: Prisma.MovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          findMany: {
            args: Prisma.MovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          create: {
            args: Prisma.MovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          createMany: {
            args: Prisma.MovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>[]
          }
          delete: {
            args: Prisma.MovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          update: {
            args: Prisma.MovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          deleteMany: {
            args: Prisma.MovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MovementPayload>
          }
          aggregate: {
            args: Prisma.MovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMovement>
          }
          groupBy: {
            args: Prisma.MovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<MovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.MovementCountArgs<ExtArgs>
            result: $Utils.Optional<MovementCountAggregateOutputType> | number
          }
        }
      }
      StockEntry: {
        payload: Prisma.$StockEntryPayload<ExtArgs>
        fields: Prisma.StockEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findFirst: {
            args: Prisma.StockEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findMany: {
            args: Prisma.StockEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          create: {
            args: Prisma.StockEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          createMany: {
            args: Prisma.StockEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          delete: {
            args: Prisma.StockEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          update: {
            args: Prisma.StockEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          deleteMany: {
            args: Prisma.StockEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          aggregate: {
            args: Prisma.StockEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockEntry>
          }
          groupBy: {
            args: Prisma.StockEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockEntryCountArgs<ExtArgs>
            result: $Utils.Optional<StockEntryCountAggregateOutputType> | number
          }
        }
      }
      StockExit: {
        payload: Prisma.$StockExitPayload<ExtArgs>
        fields: Prisma.StockExitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          findFirst: {
            args: Prisma.StockExitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          findMany: {
            args: Prisma.StockExitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>[]
          }
          create: {
            args: Prisma.StockExitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          createMany: {
            args: Prisma.StockExitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>[]
          }
          delete: {
            args: Prisma.StockExitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          update: {
            args: Prisma.StockExitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          deleteMany: {
            args: Prisma.StockExitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockExitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          aggregate: {
            args: Prisma.StockExitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExit>
          }
          groupBy: {
            args: Prisma.StockExitGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitCountAggregateOutputType> | number
          }
        }
      }
      StockExitDetail: {
        payload: Prisma.$StockExitDetailPayload<ExtArgs>
        fields: Prisma.StockExitDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          findFirst: {
            args: Prisma.StockExitDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          findMany: {
            args: Prisma.StockExitDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>[]
          }
          create: {
            args: Prisma.StockExitDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          createMany: {
            args: Prisma.StockExitDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>[]
          }
          delete: {
            args: Prisma.StockExitDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          update: {
            args: Prisma.StockExitDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          deleteMany: {
            args: Prisma.StockExitDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockExitDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDetailPayload>
          }
          aggregate: {
            args: Prisma.StockExitDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExitDetail>
          }
          groupBy: {
            args: Prisma.StockExitDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitDetailCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitDetailCountAggregateOutputType> | number
          }
        }
      }
      StockExitDocument: {
        payload: Prisma.$StockExitDocumentPayload<ExtArgs>
        fields: Prisma.StockExitDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          findFirst: {
            args: Prisma.StockExitDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          findMany: {
            args: Prisma.StockExitDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>[]
          }
          create: {
            args: Prisma.StockExitDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          createMany: {
            args: Prisma.StockExitDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>[]
          }
          delete: {
            args: Prisma.StockExitDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          update: {
            args: Prisma.StockExitDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          deleteMany: {
            args: Prisma.StockExitDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockExitDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentPayload>
          }
          aggregate: {
            args: Prisma.StockExitDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExitDocument>
          }
          groupBy: {
            args: Prisma.StockExitDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentCountAggregateOutputType> | number
          }
        }
      }
      StockExitDocumentLine: {
        payload: Prisma.$StockExitDocumentLinePayload<ExtArgs>
        fields: Prisma.StockExitDocumentLineFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitDocumentLineFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitDocumentLineFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          findFirst: {
            args: Prisma.StockExitDocumentLineFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitDocumentLineFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          findMany: {
            args: Prisma.StockExitDocumentLineFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>[]
          }
          create: {
            args: Prisma.StockExitDocumentLineCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          createMany: {
            args: Prisma.StockExitDocumentLineCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitDocumentLineCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>[]
          }
          delete: {
            args: Prisma.StockExitDocumentLineDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          update: {
            args: Prisma.StockExitDocumentLineUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          deleteMany: {
            args: Prisma.StockExitDocumentLineDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitDocumentLineUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockExitDocumentLineUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLinePayload>
          }
          aggregate: {
            args: Prisma.StockExitDocumentLineAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExitDocumentLine>
          }
          groupBy: {
            args: Prisma.StockExitDocumentLineGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentLineGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitDocumentLineCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentLineCountAggregateOutputType> | number
          }
        }
      }
      StockExitDocumentLineDetail: {
        payload: Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>
        fields: Prisma.StockExitDocumentLineDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitDocumentLineDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitDocumentLineDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          findFirst: {
            args: Prisma.StockExitDocumentLineDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitDocumentLineDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          findMany: {
            args: Prisma.StockExitDocumentLineDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>[]
          }
          create: {
            args: Prisma.StockExitDocumentLineDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          createMany: {
            args: Prisma.StockExitDocumentLineDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitDocumentLineDetailCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>[]
          }
          delete: {
            args: Prisma.StockExitDocumentLineDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          update: {
            args: Prisma.StockExitDocumentLineDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          deleteMany: {
            args: Prisma.StockExitDocumentLineDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitDocumentLineDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StockExitDocumentLineDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitDocumentLineDetailPayload>
          }
          aggregate: {
            args: Prisma.StockExitDocumentLineDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExitDocumentLineDetail>
          }
          groupBy: {
            args: Prisma.StockExitDocumentLineDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentLineDetailGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitDocumentLineDetailCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitDocumentLineDetailCountAggregateOutputType> | number
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
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    products: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SupplierCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    movements: number
    entries: number
    exits: number
    docLines: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    movements?: boolean | ProductCountOutputTypeCountMovementsArgs
    entries?: boolean | ProductCountOutputTypeCountEntriesArgs
    exits?: boolean | ProductCountOutputTypeCountExitsArgs
    docLines?: boolean | ProductCountOutputTypeCountDocLinesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDocLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineWhereInput
  }


  /**
   * Count Type StockEntryCountOutputType
   */

  export type StockEntryCountOutputType = {
    exitDetails: number
    docLineDetails: number
  }

  export type StockEntryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exitDetails?: boolean | StockEntryCountOutputTypeCountExitDetailsArgs
    docLineDetails?: boolean | StockEntryCountOutputTypeCountDocLineDetailsArgs
  }

  // Custom InputTypes
  /**
   * StockEntryCountOutputType without action
   */
  export type StockEntryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntryCountOutputType
     */
    select?: StockEntryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockEntryCountOutputType without action
   */
  export type StockEntryCountOutputTypeCountExitDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDetailWhereInput
  }

  /**
   * StockEntryCountOutputType without action
   */
  export type StockEntryCountOutputTypeCountDocLineDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineDetailWhereInput
  }


  /**
   * Count Type StockExitCountOutputType
   */

  export type StockExitCountOutputType = {
    details: number
  }

  export type StockExitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | StockExitCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * StockExitCountOutputType without action
   */
  export type StockExitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitCountOutputType
     */
    select?: StockExitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockExitCountOutputType without action
   */
  export type StockExitCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDetailWhereInput
  }


  /**
   * Count Type StockExitDocumentCountOutputType
   */

  export type StockExitDocumentCountOutputType = {
    lines: number
  }

  export type StockExitDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | StockExitDocumentCountOutputTypeCountLinesArgs
  }

  // Custom InputTypes
  /**
   * StockExitDocumentCountOutputType without action
   */
  export type StockExitDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentCountOutputType
     */
    select?: StockExitDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockExitDocumentCountOutputType without action
   */
  export type StockExitDocumentCountOutputTypeCountLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineWhereInput
  }


  /**
   * Count Type StockExitDocumentLineCountOutputType
   */

  export type StockExitDocumentLineCountOutputType = {
    details: number
  }

  export type StockExitDocumentLineCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | StockExitDocumentLineCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * StockExitDocumentLineCountOutputType without action
   */
  export type StockExitDocumentLineCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineCountOutputType
     */
    select?: StockExitDocumentLineCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StockExitDocumentLineCountOutputType without action
   */
  export type StockExitDocumentLineCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Category model
   */ 
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierAvgAggregateOutputType = {
    id: number | null
  }

  export type SupplierSumAggregateOutputType = {
    id: number | null
  }

  export type SupplierMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    phone: string | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    _all: number
  }


  export type SupplierAvgAggregateInputType = {
    id?: true
  }

  export type SupplierSumAggregateInputType = {
    id?: true
  }

  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _avg?: SupplierAvgAggregateInputType
    _sum?: SupplierSumAggregateInputType
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: number
    name: string
    email: string | null
    phone: string | null
    _count: SupplierCountAggregateOutputType | null
    _avg: SupplierAvgAggregateOutputType | null
    _sum: SupplierSumAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    products?: boolean | Supplier$productsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
  }

  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Supplier$productsArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string | null
      phone: string | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
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
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Supplier$productsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Supplier model
   */ 
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'Int'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
  }

  /**
   * Supplier.products
   */
  export type Supplier$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    categoryId: number | null
    supplierId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    quantity: number | null
    categoryId: number | null
    supplierId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    categoryId: number | null
    supplierId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    price: number | null
    quantity: number | null
    categoryId: number | null
    supplierId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    quantity: number
    categoryId: number
    supplierId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    categoryId?: true
    supplierId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    quantity?: true
    categoryId?: true
    supplierId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    categoryId?: true
    supplierId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    categoryId?: true
    supplierId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    quantity?: true
    categoryId?: true
    supplierId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string | null
    price: number
    quantity: number
    categoryId: number
    supplierId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    categoryId?: boolean
    supplierId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    movements?: boolean | Product$movementsArgs<ExtArgs>
    entries?: boolean | Product$entriesArgs<ExtArgs>
    exits?: boolean | Product$exitsArgs<ExtArgs>
    docLines?: boolean | Product$docLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    categoryId?: boolean
    supplierId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    quantity?: boolean
    categoryId?: boolean
    supplierId?: boolean
  }

  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    movements?: boolean | Product$movementsArgs<ExtArgs>
    entries?: boolean | Product$entriesArgs<ExtArgs>
    exits?: boolean | Product$exitsArgs<ExtArgs>
    docLines?: boolean | Product$docLinesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      movements: Prisma.$MovementPayload<ExtArgs>[]
      entries: Prisma.$StockEntryPayload<ExtArgs>[]
      exits: Prisma.$StockExitPayload<ExtArgs>[]
      docLines: Prisma.$StockExitDocumentLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      price: number
      quantity: number
      categoryId: number
      supplierId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    movements<T extends Product$movementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$movementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany"> | Null>
    entries<T extends Product$entriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$entriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany"> | Null>
    exits<T extends Product$exitsArgs<ExtArgs> = {}>(args?: Subset<T, Product$exitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findMany"> | Null>
    docLines<T extends Product$docLinesArgs<ExtArgs> = {}>(args?: Subset<T, Product$docLinesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Product model
   */ 
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly categoryId: FieldRef<"Product", 'Int'>
    readonly supplierId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
  }

  /**
   * Product.movements
   */
  export type Product$movementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    cursor?: MovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Product.entries
   */
  export type Product$entriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    cursor?: StockEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * Product.exits
   */
  export type Product$exitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    where?: StockExitWhereInput
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    cursor?: StockExitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * Product.docLines
   */
  export type Product$docLinesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    where?: StockExitDocumentLineWhereInput
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    cursor?: StockExitDocumentLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDocumentLineScalarFieldEnum | StockExitDocumentLineScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Movement
   */

  export type AggregateMovement = {
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  export type MovementAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type MovementSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
  }

  export type MovementMinAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type MovementMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    createdAt: Date | null
  }

  export type MovementCountAggregateOutputType = {
    id: number
    productId: number
    type: number
    quantity: number
    createdAt: number
    _all: number
  }


  export type MovementAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type MovementSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
  }

  export type MovementMinAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    createdAt?: true
  }

  export type MovementMaxAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    createdAt?: true
  }

  export type MovementCountAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    createdAt?: true
    _all?: true
  }

  export type MovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movement to aggregate.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Movements
    **/
    _count?: true | MovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MovementMaxAggregateInputType
  }

  export type GetMovementAggregateType<T extends MovementAggregateArgs> = {
        [P in keyof T & keyof AggregateMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMovement[P]>
      : GetScalarType<T[P], AggregateMovement[P]>
  }




  export type MovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MovementWhereInput
    orderBy?: MovementOrderByWithAggregationInput | MovementOrderByWithAggregationInput[]
    by: MovementScalarFieldEnum[] | MovementScalarFieldEnum
    having?: MovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MovementCountAggregateInputType | true
    _avg?: MovementAvgAggregateInputType
    _sum?: MovementSumAggregateInputType
    _min?: MovementMinAggregateInputType
    _max?: MovementMaxAggregateInputType
  }

  export type MovementGroupByOutputType = {
    id: number
    productId: number
    type: string
    quantity: number
    createdAt: Date
    _count: MovementCountAggregateOutputType | null
    _avg: MovementAvgAggregateOutputType | null
    _sum: MovementSumAggregateOutputType | null
    _min: MovementMinAggregateOutputType | null
    _max: MovementMaxAggregateOutputType | null
  }

  type GetMovementGroupByPayload<T extends MovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MovementGroupByOutputType[P]>
            : GetScalarType<T[P], MovementGroupByOutputType[P]>
        }
      >
    >


  export type MovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["movement"]>

  export type MovementSelectScalar = {
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    createdAt?: boolean
  }

  export type MovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type MovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $MovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Movement"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      type: string
      quantity: number
      createdAt: Date
    }, ExtArgs["result"]["movement"]>
    composites: {}
  }

  type MovementGetPayload<S extends boolean | null | undefined | MovementDefaultArgs> = $Result.GetResult<Prisma.$MovementPayload, S>

  type MovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MovementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MovementCountAggregateInputType | true
    }

  export interface MovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Movement'], meta: { name: 'Movement' } }
    /**
     * Find zero or one Movement that matches the filter.
     * @param {MovementFindUniqueArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MovementFindUniqueArgs>(args: SelectSubset<T, MovementFindUniqueArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Movement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MovementFindUniqueOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MovementFindUniqueOrThrowArgs>(args: SelectSubset<T, MovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Movement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MovementFindFirstArgs>(args?: SelectSubset<T, MovementFindFirstArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Movement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindFirstOrThrowArgs} args - Arguments to find a Movement
     * @example
     * // Get one Movement
     * const movement = await prisma.movement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MovementFindFirstOrThrowArgs>(args?: SelectSubset<T, MovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Movements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Movements
     * const movements = await prisma.movement.findMany()
     * 
     * // Get first 10 Movements
     * const movements = await prisma.movement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const movementWithIdOnly = await prisma.movement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MovementFindManyArgs>(args?: SelectSubset<T, MovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Movement.
     * @param {MovementCreateArgs} args - Arguments to create a Movement.
     * @example
     * // Create one Movement
     * const Movement = await prisma.movement.create({
     *   data: {
     *     // ... data to create a Movement
     *   }
     * })
     * 
     */
    create<T extends MovementCreateArgs>(args: SelectSubset<T, MovementCreateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Movements.
     * @param {MovementCreateManyArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MovementCreateManyArgs>(args?: SelectSubset<T, MovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Movements and returns the data saved in the database.
     * @param {MovementCreateManyAndReturnArgs} args - Arguments to create many Movements.
     * @example
     * // Create many Movements
     * const movement = await prisma.movement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Movements and only return the `id`
     * const movementWithIdOnly = await prisma.movement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MovementCreateManyAndReturnArgs>(args?: SelectSubset<T, MovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Movement.
     * @param {MovementDeleteArgs} args - Arguments to delete one Movement.
     * @example
     * // Delete one Movement
     * const Movement = await prisma.movement.delete({
     *   where: {
     *     // ... filter to delete one Movement
     *   }
     * })
     * 
     */
    delete<T extends MovementDeleteArgs>(args: SelectSubset<T, MovementDeleteArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Movement.
     * @param {MovementUpdateArgs} args - Arguments to update one Movement.
     * @example
     * // Update one Movement
     * const movement = await prisma.movement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MovementUpdateArgs>(args: SelectSubset<T, MovementUpdateArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Movements.
     * @param {MovementDeleteManyArgs} args - Arguments to filter Movements to delete.
     * @example
     * // Delete a few Movements
     * const { count } = await prisma.movement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MovementDeleteManyArgs>(args?: SelectSubset<T, MovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Movements
     * const movement = await prisma.movement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MovementUpdateManyArgs>(args: SelectSubset<T, MovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Movement.
     * @param {MovementUpsertArgs} args - Arguments to update or create a Movement.
     * @example
     * // Update or create a Movement
     * const movement = await prisma.movement.upsert({
     *   create: {
     *     // ... data to create a Movement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Movement we want to update
     *   }
     * })
     */
    upsert<T extends MovementUpsertArgs>(args: SelectSubset<T, MovementUpsertArgs<ExtArgs>>): Prisma__MovementClient<$Result.GetResult<Prisma.$MovementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Movements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementCountArgs} args - Arguments to filter Movements to count.
     * @example
     * // Count the number of Movements
     * const count = await prisma.movement.count({
     *   where: {
     *     // ... the filter for the Movements we want to count
     *   }
     * })
    **/
    count<T extends MovementCountArgs>(
      args?: Subset<T, MovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MovementAggregateArgs>(args: Subset<T, MovementAggregateArgs>): Prisma.PrismaPromise<GetMovementAggregateType<T>>

    /**
     * Group by Movement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MovementGroupByArgs} args - Group by arguments.
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
      T extends MovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MovementGroupByArgs['orderBy'] }
        : { orderBy?: MovementGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Movement model
   */
  readonly fields: MovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Movement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the Movement model
   */ 
  interface MovementFieldRefs {
    readonly id: FieldRef<"Movement", 'Int'>
    readonly productId: FieldRef<"Movement", 'Int'>
    readonly type: FieldRef<"Movement", 'String'>
    readonly quantity: FieldRef<"Movement", 'Int'>
    readonly createdAt: FieldRef<"Movement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Movement findUnique
   */
  export type MovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findUniqueOrThrow
   */
  export type MovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement findFirst
   */
  export type MovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findFirstOrThrow
   */
  export type MovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movement to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Movements.
     */
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement findMany
   */
  export type MovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter, which Movements to fetch.
     */
    where?: MovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Movements to fetch.
     */
    orderBy?: MovementOrderByWithRelationInput | MovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Movements.
     */
    cursor?: MovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Movements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Movements.
     */
    skip?: number
    distinct?: MovementScalarFieldEnum | MovementScalarFieldEnum[]
  }

  /**
   * Movement create
   */
  export type MovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to create a Movement.
     */
    data: XOR<MovementCreateInput, MovementUncheckedCreateInput>
  }

  /**
   * Movement createMany
   */
  export type MovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
  }

  /**
   * Movement createManyAndReturn
   */
  export type MovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Movements.
     */
    data: MovementCreateManyInput | MovementCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Movement update
   */
  export type MovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The data needed to update a Movement.
     */
    data: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
    /**
     * Choose, which Movement to update.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement updateMany
   */
  export type MovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Movements.
     */
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyInput>
    /**
     * Filter which Movements to update
     */
    where?: MovementWhereInput
  }

  /**
   * Movement upsert
   */
  export type MovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * The filter to search for the Movement to update in case it exists.
     */
    where: MovementWhereUniqueInput
    /**
     * In case the Movement found by the `where` argument doesn't exist, create a new Movement with this data.
     */
    create: XOR<MovementCreateInput, MovementUncheckedCreateInput>
    /**
     * In case the Movement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MovementUpdateInput, MovementUncheckedUpdateInput>
  }

  /**
   * Movement delete
   */
  export type MovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
    /**
     * Filter which Movement to delete.
     */
    where: MovementWhereUniqueInput
  }

  /**
   * Movement deleteMany
   */
  export type MovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Movements to delete
     */
    where?: MovementWhereInput
  }

  /**
   * Movement without action
   */
  export type MovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Movement
     */
    select?: MovementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MovementInclude<ExtArgs> | null
  }


  /**
   * Model StockEntry
   */

  export type AggregateStockEntry = {
    _count: StockEntryCountAggregateOutputType | null
    _avg: StockEntryAvgAggregateOutputType | null
    _sum: StockEntrySumAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  export type StockEntryAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    quantityUsed: number | null
    availableQuantity: number | null
    unitCost: number | null
  }

  export type StockEntrySumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    quantityUsed: number | null
    availableQuantity: number | null
    unitCost: number | null
  }

  export type StockEntryMinAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    quantityUsed: number | null
    availableQuantity: number | null
    unitCost: number | null
    entryDate: Date | null
    origin: string | null
    reason: string | null
    userId: string | null
  }

  export type StockEntryMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    quantityUsed: number | null
    availableQuantity: number | null
    unitCost: number | null
    entryDate: Date | null
    origin: string | null
    reason: string | null
    userId: string | null
  }

  export type StockEntryCountAggregateOutputType = {
    id: number
    productId: number
    quantity: number
    quantityUsed: number
    availableQuantity: number
    unitCost: number
    entryDate: number
    origin: number
    reason: number
    userId: number
    _all: number
  }


  export type StockEntryAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    quantityUsed?: true
    availableQuantity?: true
    unitCost?: true
  }

  export type StockEntrySumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    quantityUsed?: true
    availableQuantity?: true
    unitCost?: true
  }

  export type StockEntryMinAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    quantityUsed?: true
    availableQuantity?: true
    unitCost?: true
    entryDate?: true
    origin?: true
    reason?: true
    userId?: true
  }

  export type StockEntryMaxAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    quantityUsed?: true
    availableQuantity?: true
    unitCost?: true
    entryDate?: true
    origin?: true
    reason?: true
    userId?: true
  }

  export type StockEntryCountAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    quantityUsed?: true
    availableQuantity?: true
    unitCost?: true
    entryDate?: true
    origin?: true
    reason?: true
    userId?: true
    _all?: true
  }

  export type StockEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntry to aggregate.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockEntries
    **/
    _count?: true | StockEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockEntryMaxAggregateInputType
  }

  export type GetStockEntryAggregateType<T extends StockEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateStockEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockEntry[P]>
      : GetScalarType<T[P], AggregateStockEntry[P]>
  }




  export type StockEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithAggregationInput | StockEntryOrderByWithAggregationInput[]
    by: StockEntryScalarFieldEnum[] | StockEntryScalarFieldEnum
    having?: StockEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockEntryCountAggregateInputType | true
    _avg?: StockEntryAvgAggregateInputType
    _sum?: StockEntrySumAggregateInputType
    _min?: StockEntryMinAggregateInputType
    _max?: StockEntryMaxAggregateInputType
  }

  export type StockEntryGroupByOutputType = {
    id: number
    productId: number
    quantity: number
    quantityUsed: number
    availableQuantity: number
    unitCost: number
    entryDate: Date
    origin: string | null
    reason: string | null
    userId: string | null
    _count: StockEntryCountAggregateOutputType | null
    _avg: StockEntryAvgAggregateOutputType | null
    _sum: StockEntrySumAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  type GetStockEntryGroupByPayload<T extends StockEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
            : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
        }
      >
    >


  export type StockEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    quantityUsed?: boolean
    availableQuantity?: boolean
    unitCost?: boolean
    entryDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    exitDetails?: boolean | StockEntry$exitDetailsArgs<ExtArgs>
    docLineDetails?: boolean | StockEntry$docLineDetailsArgs<ExtArgs>
    _count?: boolean | StockEntryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    quantity?: boolean
    quantityUsed?: boolean
    availableQuantity?: boolean
    unitCost?: boolean
    entryDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectScalar = {
    id?: boolean
    productId?: boolean
    quantity?: boolean
    quantityUsed?: boolean
    availableQuantity?: boolean
    unitCost?: boolean
    entryDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
  }

  export type StockEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    exitDetails?: boolean | StockEntry$exitDetailsArgs<ExtArgs>
    docLineDetails?: boolean | StockEntry$docLineDetailsArgs<ExtArgs>
    _count?: boolean | StockEntryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockEntry"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      exitDetails: Prisma.$StockExitDetailPayload<ExtArgs>[]
      docLineDetails: Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      quantity: number
      quantityUsed: number
      availableQuantity: number
      unitCost: number
      entryDate: Date
      origin: string | null
      reason: string | null
      userId: string | null
    }, ExtArgs["result"]["stockEntry"]>
    composites: {}
  }

  type StockEntryGetPayload<S extends boolean | null | undefined | StockEntryDefaultArgs> = $Result.GetResult<Prisma.$StockEntryPayload, S>

  type StockEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockEntryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockEntryCountAggregateInputType | true
    }

  export interface StockEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockEntry'], meta: { name: 'StockEntry' } }
    /**
     * Find zero or one StockEntry that matches the filter.
     * @param {StockEntryFindUniqueArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockEntryFindUniqueArgs>(args: SelectSubset<T, StockEntryFindUniqueArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockEntry that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockEntryFindUniqueOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, StockEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockEntryFindFirstArgs>(args?: SelectSubset<T, StockEntryFindFirstArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, StockEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockEntries
     * const stockEntries = await prisma.stockEntry.findMany()
     * 
     * // Get first 10 StockEntries
     * const stockEntries = await prisma.stockEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockEntryFindManyArgs>(args?: SelectSubset<T, StockEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockEntry.
     * @param {StockEntryCreateArgs} args - Arguments to create a StockEntry.
     * @example
     * // Create one StockEntry
     * const StockEntry = await prisma.stockEntry.create({
     *   data: {
     *     // ... data to create a StockEntry
     *   }
     * })
     * 
     */
    create<T extends StockEntryCreateArgs>(args: SelectSubset<T, StockEntryCreateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockEntries.
     * @param {StockEntryCreateManyArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockEntryCreateManyArgs>(args?: SelectSubset<T, StockEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockEntries and returns the data saved in the database.
     * @param {StockEntryCreateManyAndReturnArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockEntries and only return the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, StockEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockEntry.
     * @param {StockEntryDeleteArgs} args - Arguments to delete one StockEntry.
     * @example
     * // Delete one StockEntry
     * const StockEntry = await prisma.stockEntry.delete({
     *   where: {
     *     // ... filter to delete one StockEntry
     *   }
     * })
     * 
     */
    delete<T extends StockEntryDeleteArgs>(args: SelectSubset<T, StockEntryDeleteArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockEntry.
     * @param {StockEntryUpdateArgs} args - Arguments to update one StockEntry.
     * @example
     * // Update one StockEntry
     * const stockEntry = await prisma.stockEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockEntryUpdateArgs>(args: SelectSubset<T, StockEntryUpdateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockEntries.
     * @param {StockEntryDeleteManyArgs} args - Arguments to filter StockEntries to delete.
     * @example
     * // Delete a few StockEntries
     * const { count } = await prisma.stockEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockEntryDeleteManyArgs>(args?: SelectSubset<T, StockEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockEntries
     * const stockEntry = await prisma.stockEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockEntryUpdateManyArgs>(args: SelectSubset<T, StockEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockEntry.
     * @param {StockEntryUpsertArgs} args - Arguments to update or create a StockEntry.
     * @example
     * // Update or create a StockEntry
     * const stockEntry = await prisma.stockEntry.upsert({
     *   create: {
     *     // ... data to create a StockEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockEntry we want to update
     *   }
     * })
     */
    upsert<T extends StockEntryUpsertArgs>(args: SelectSubset<T, StockEntryUpsertArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryCountArgs} args - Arguments to filter StockEntries to count.
     * @example
     * // Count the number of StockEntries
     * const count = await prisma.stockEntry.count({
     *   where: {
     *     // ... the filter for the StockEntries we want to count
     *   }
     * })
    **/
    count<T extends StockEntryCountArgs>(
      args?: Subset<T, StockEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockEntryAggregateArgs>(args: Subset<T, StockEntryAggregateArgs>): Prisma.PrismaPromise<GetStockEntryAggregateType<T>>

    /**
     * Group by StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryGroupByArgs} args - Group by arguments.
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
      T extends StockEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockEntryGroupByArgs['orderBy'] }
        : { orderBy?: StockEntryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockEntry model
   */
  readonly fields: StockEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exitDetails<T extends StockEntry$exitDetailsArgs<ExtArgs> = {}>(args?: Subset<T, StockEntry$exitDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findMany"> | Null>
    docLineDetails<T extends StockEntry$docLineDetailsArgs<ExtArgs> = {}>(args?: Subset<T, StockEntry$docLineDetailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StockEntry model
   */ 
  interface StockEntryFieldRefs {
    readonly id: FieldRef<"StockEntry", 'Int'>
    readonly productId: FieldRef<"StockEntry", 'Int'>
    readonly quantity: FieldRef<"StockEntry", 'Int'>
    readonly quantityUsed: FieldRef<"StockEntry", 'Int'>
    readonly availableQuantity: FieldRef<"StockEntry", 'Int'>
    readonly unitCost: FieldRef<"StockEntry", 'Float'>
    readonly entryDate: FieldRef<"StockEntry", 'DateTime'>
    readonly origin: FieldRef<"StockEntry", 'String'>
    readonly reason: FieldRef<"StockEntry", 'String'>
    readonly userId: FieldRef<"StockEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockEntry findUnique
   */
  export type StockEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findUniqueOrThrow
   */
  export type StockEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findFirst
   */
  export type StockEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findFirstOrThrow
   */
  export type StockEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findMany
   */
  export type StockEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntries to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry create
   */
  export type StockEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a StockEntry.
     */
    data: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
  }

  /**
   * StockEntry createMany
   */
  export type StockEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
  }

  /**
   * StockEntry createManyAndReturn
   */
  export type StockEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockEntry update
   */
  export type StockEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a StockEntry.
     */
    data: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
    /**
     * Choose, which StockEntry to update.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry updateMany
   */
  export type StockEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockEntries.
     */
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyInput>
    /**
     * Filter which StockEntries to update
     */
    where?: StockEntryWhereInput
  }

  /**
   * StockEntry upsert
   */
  export type StockEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the StockEntry to update in case it exists.
     */
    where: StockEntryWhereUniqueInput
    /**
     * In case the StockEntry found by the `where` argument doesn't exist, create a new StockEntry with this data.
     */
    create: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
    /**
     * In case the StockEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
  }

  /**
   * StockEntry delete
   */
  export type StockEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter which StockEntry to delete.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry deleteMany
   */
  export type StockEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntries to delete
     */
    where?: StockEntryWhereInput
  }

  /**
   * StockEntry.exitDetails
   */
  export type StockEntry$exitDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    where?: StockExitDetailWhereInput
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    cursor?: StockExitDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDetailScalarFieldEnum | StockExitDetailScalarFieldEnum[]
  }

  /**
   * StockEntry.docLineDetails
   */
  export type StockEntry$docLineDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    where?: StockExitDocumentLineDetailWhereInput
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDocumentLineDetailScalarFieldEnum | StockExitDocumentLineDetailScalarFieldEnum[]
  }

  /**
   * StockEntry without action
   */
  export type StockEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
  }


  /**
   * Model StockExit
   */

  export type AggregateStockExit = {
    _count: StockExitCountAggregateOutputType | null
    _avg: StockExitAvgAggregateOutputType | null
    _sum: StockExitSumAggregateOutputType | null
    _min: StockExitMinAggregateOutputType | null
    _max: StockExitMaxAggregateOutputType | null
  }

  export type StockExitAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitSumAggregateOutputType = {
    id: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitMinAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    totalCost: number | null
    exitDate: Date | null
    origin: string | null
    reason: string | null
    userId: string | null
  }

  export type StockExitMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    type: string | null
    quantity: number | null
    totalCost: number | null
    exitDate: Date | null
    origin: string | null
    reason: string | null
    userId: string | null
  }

  export type StockExitCountAggregateOutputType = {
    id: number
    productId: number
    type: number
    quantity: number
    totalCost: number
    exitDate: number
    origin: number
    reason: number
    userId: number
    _all: number
  }


  export type StockExitAvgAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitSumAggregateInputType = {
    id?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitMinAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    totalCost?: true
    exitDate?: true
    origin?: true
    reason?: true
    userId?: true
  }

  export type StockExitMaxAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    totalCost?: true
    exitDate?: true
    origin?: true
    reason?: true
    userId?: true
  }

  export type StockExitCountAggregateInputType = {
    id?: true
    productId?: true
    type?: true
    quantity?: true
    totalCost?: true
    exitDate?: true
    origin?: true
    reason?: true
    userId?: true
    _all?: true
  }

  export type StockExitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExit to aggregate.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExits
    **/
    _count?: true | StockExitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitMaxAggregateInputType
  }

  export type GetStockExitAggregateType<T extends StockExitAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExit[P]>
      : GetScalarType<T[P], AggregateStockExit[P]>
  }




  export type StockExitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitWhereInput
    orderBy?: StockExitOrderByWithAggregationInput | StockExitOrderByWithAggregationInput[]
    by: StockExitScalarFieldEnum[] | StockExitScalarFieldEnum
    having?: StockExitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitCountAggregateInputType | true
    _avg?: StockExitAvgAggregateInputType
    _sum?: StockExitSumAggregateInputType
    _min?: StockExitMinAggregateInputType
    _max?: StockExitMaxAggregateInputType
  }

  export type StockExitGroupByOutputType = {
    id: number
    productId: number
    type: string
    quantity: number
    totalCost: number
    exitDate: Date
    origin: string | null
    reason: string | null
    userId: string | null
    _count: StockExitCountAggregateOutputType | null
    _avg: StockExitAvgAggregateOutputType | null
    _sum: StockExitSumAggregateOutputType | null
    _min: StockExitMinAggregateOutputType | null
    _max: StockExitMaxAggregateOutputType | null
  }

  type GetStockExitGroupByPayload<T extends StockExitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitGroupByOutputType[P]>
        }
      >
    >


  export type StockExitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    totalCost?: boolean
    exitDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    details?: boolean | StockExit$detailsArgs<ExtArgs>
    _count?: boolean | StockExitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExit"]>

  export type StockExitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    totalCost?: boolean
    exitDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExit"]>

  export type StockExitSelectScalar = {
    id?: boolean
    productId?: boolean
    type?: boolean
    quantity?: boolean
    totalCost?: boolean
    exitDate?: boolean
    origin?: boolean
    reason?: boolean
    userId?: boolean
  }

  export type StockExitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    details?: boolean | StockExit$detailsArgs<ExtArgs>
    _count?: boolean | StockExitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockExitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockExitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExit"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      details: Prisma.$StockExitDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      type: string
      quantity: number
      totalCost: number
      exitDate: Date
      origin: string | null
      reason: string | null
      userId: string | null
    }, ExtArgs["result"]["stockExit"]>
    composites: {}
  }

  type StockExitGetPayload<S extends boolean | null | undefined | StockExitDefaultArgs> = $Result.GetResult<Prisma.$StockExitPayload, S>

  type StockExitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockExitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockExitCountAggregateInputType | true
    }

  export interface StockExitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExit'], meta: { name: 'StockExit' } }
    /**
     * Find zero or one StockExit that matches the filter.
     * @param {StockExitFindUniqueArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitFindUniqueArgs>(args: SelectSubset<T, StockExitFindUniqueArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockExit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockExitFindUniqueOrThrowArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockExit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindFirstArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitFindFirstArgs>(args?: SelectSubset<T, StockExitFindFirstArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockExit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindFirstOrThrowArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockExits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExits
     * const stockExits = await prisma.stockExit.findMany()
     * 
     * // Get first 10 StockExits
     * const stockExits = await prisma.stockExit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitWithIdOnly = await prisma.stockExit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitFindManyArgs>(args?: SelectSubset<T, StockExitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockExit.
     * @param {StockExitCreateArgs} args - Arguments to create a StockExit.
     * @example
     * // Create one StockExit
     * const StockExit = await prisma.stockExit.create({
     *   data: {
     *     // ... data to create a StockExit
     *   }
     * })
     * 
     */
    create<T extends StockExitCreateArgs>(args: SelectSubset<T, StockExitCreateArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockExits.
     * @param {StockExitCreateManyArgs} args - Arguments to create many StockExits.
     * @example
     * // Create many StockExits
     * const stockExit = await prisma.stockExit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitCreateManyArgs>(args?: SelectSubset<T, StockExitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExits and returns the data saved in the database.
     * @param {StockExitCreateManyAndReturnArgs} args - Arguments to create many StockExits.
     * @example
     * // Create many StockExits
     * const stockExit = await prisma.stockExit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExits and only return the `id`
     * const stockExitWithIdOnly = await prisma.stockExit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockExit.
     * @param {StockExitDeleteArgs} args - Arguments to delete one StockExit.
     * @example
     * // Delete one StockExit
     * const StockExit = await prisma.stockExit.delete({
     *   where: {
     *     // ... filter to delete one StockExit
     *   }
     * })
     * 
     */
    delete<T extends StockExitDeleteArgs>(args: SelectSubset<T, StockExitDeleteArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockExit.
     * @param {StockExitUpdateArgs} args - Arguments to update one StockExit.
     * @example
     * // Update one StockExit
     * const stockExit = await prisma.stockExit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitUpdateArgs>(args: SelectSubset<T, StockExitUpdateArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockExits.
     * @param {StockExitDeleteManyArgs} args - Arguments to filter StockExits to delete.
     * @example
     * // Delete a few StockExits
     * const { count } = await prisma.stockExit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDeleteManyArgs>(args?: SelectSubset<T, StockExitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExits
     * const stockExit = await prisma.stockExit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitUpdateManyArgs>(args: SelectSubset<T, StockExitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockExit.
     * @param {StockExitUpsertArgs} args - Arguments to update or create a StockExit.
     * @example
     * // Update or create a StockExit
     * const stockExit = await prisma.stockExit.upsert({
     *   create: {
     *     // ... data to create a StockExit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExit we want to update
     *   }
     * })
     */
    upsert<T extends StockExitUpsertArgs>(args: SelectSubset<T, StockExitUpsertArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitCountArgs} args - Arguments to filter StockExits to count.
     * @example
     * // Count the number of StockExits
     * const count = await prisma.stockExit.count({
     *   where: {
     *     // ... the filter for the StockExits we want to count
     *   }
     * })
    **/
    count<T extends StockExitCountArgs>(
      args?: Subset<T, StockExitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockExitAggregateArgs>(args: Subset<T, StockExitAggregateArgs>): Prisma.PrismaPromise<GetStockExitAggregateType<T>>

    /**
     * Group by StockExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitGroupByArgs} args - Group by arguments.
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
      T extends StockExitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitGroupByArgs['orderBy'] }
        : { orderBy?: StockExitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockExitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExit model
   */
  readonly fields: StockExitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    details<T extends StockExit$detailsArgs<ExtArgs> = {}>(args?: Subset<T, StockExit$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StockExit model
   */ 
  interface StockExitFieldRefs {
    readonly id: FieldRef<"StockExit", 'Int'>
    readonly productId: FieldRef<"StockExit", 'Int'>
    readonly type: FieldRef<"StockExit", 'String'>
    readonly quantity: FieldRef<"StockExit", 'Int'>
    readonly totalCost: FieldRef<"StockExit", 'Float'>
    readonly exitDate: FieldRef<"StockExit", 'DateTime'>
    readonly origin: FieldRef<"StockExit", 'String'>
    readonly reason: FieldRef<"StockExit", 'String'>
    readonly userId: FieldRef<"StockExit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockExit findUnique
   */
  export type StockExitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit findUniqueOrThrow
   */
  export type StockExitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit findFirst
   */
  export type StockExitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExits.
     */
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit findFirstOrThrow
   */
  export type StockExitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExits.
     */
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit findMany
   */
  export type StockExitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExits to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit create
   */
  export type StockExitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExit.
     */
    data: XOR<StockExitCreateInput, StockExitUncheckedCreateInput>
  }

  /**
   * StockExit createMany
   */
  export type StockExitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExits.
     */
    data: StockExitCreateManyInput | StockExitCreateManyInput[]
  }

  /**
   * StockExit createManyAndReturn
   */
  export type StockExitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockExits.
     */
    data: StockExitCreateManyInput | StockExitCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExit update
   */
  export type StockExitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExit.
     */
    data: XOR<StockExitUpdateInput, StockExitUncheckedUpdateInput>
    /**
     * Choose, which StockExit to update.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit updateMany
   */
  export type StockExitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExits.
     */
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyInput>
    /**
     * Filter which StockExits to update
     */
    where?: StockExitWhereInput
  }

  /**
   * StockExit upsert
   */
  export type StockExitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExit to update in case it exists.
     */
    where: StockExitWhereUniqueInput
    /**
     * In case the StockExit found by the `where` argument doesn't exist, create a new StockExit with this data.
     */
    create: XOR<StockExitCreateInput, StockExitUncheckedCreateInput>
    /**
     * In case the StockExit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitUpdateInput, StockExitUncheckedUpdateInput>
  }

  /**
   * StockExit delete
   */
  export type StockExitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter which StockExit to delete.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit deleteMany
   */
  export type StockExitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExits to delete
     */
    where?: StockExitWhereInput
  }

  /**
   * StockExit.details
   */
  export type StockExit$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    where?: StockExitDetailWhereInput
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    cursor?: StockExitDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDetailScalarFieldEnum | StockExitDetailScalarFieldEnum[]
  }

  /**
   * StockExit without action
   */
  export type StockExitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
  }


  /**
   * Model StockExitDetail
   */

  export type AggregateStockExitDetail = {
    _count: StockExitDetailCountAggregateOutputType | null
    _avg: StockExitDetailAvgAggregateOutputType | null
    _sum: StockExitDetailSumAggregateOutputType | null
    _min: StockExitDetailMinAggregateOutputType | null
    _max: StockExitDetailMaxAggregateOutputType | null
  }

  export type StockExitDetailAvgAggregateOutputType = {
    id: number | null
    exitId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDetailSumAggregateOutputType = {
    id: number | null
    exitId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDetailMinAggregateOutputType = {
    id: number | null
    exitId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDetailMaxAggregateOutputType = {
    id: number | null
    exitId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDetailCountAggregateOutputType = {
    id: number
    exitId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
    _all: number
  }


  export type StockExitDetailAvgAggregateInputType = {
    id?: true
    exitId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDetailSumAggregateInputType = {
    id?: true
    exitId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDetailMinAggregateInputType = {
    id?: true
    exitId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDetailMaxAggregateInputType = {
    id?: true
    exitId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDetailCountAggregateInputType = {
    id?: true
    exitId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
    _all?: true
  }

  export type StockExitDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDetail to aggregate.
     */
    where?: StockExitDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDetails to fetch.
     */
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExitDetails
    **/
    _count?: true | StockExitDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitDetailMaxAggregateInputType
  }

  export type GetStockExitDetailAggregateType<T extends StockExitDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExitDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExitDetail[P]>
      : GetScalarType<T[P], AggregateStockExitDetail[P]>
  }




  export type StockExitDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDetailWhereInput
    orderBy?: StockExitDetailOrderByWithAggregationInput | StockExitDetailOrderByWithAggregationInput[]
    by: StockExitDetailScalarFieldEnum[] | StockExitDetailScalarFieldEnum
    having?: StockExitDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitDetailCountAggregateInputType | true
    _avg?: StockExitDetailAvgAggregateInputType
    _sum?: StockExitDetailSumAggregateInputType
    _min?: StockExitDetailMinAggregateInputType
    _max?: StockExitDetailMaxAggregateInputType
  }

  export type StockExitDetailGroupByOutputType = {
    id: number
    exitId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
    _count: StockExitDetailCountAggregateOutputType | null
    _avg: StockExitDetailAvgAggregateOutputType | null
    _sum: StockExitDetailSumAggregateOutputType | null
    _min: StockExitDetailMinAggregateOutputType | null
    _max: StockExitDetailMaxAggregateOutputType | null
  }

  type GetStockExitDetailGroupByPayload<T extends StockExitDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitDetailGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitDetailGroupByOutputType[P]>
        }
      >
    >


  export type StockExitDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exitId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
    exit?: boolean | StockExitDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDetail"]>

  export type StockExitDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    exitId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
    exit?: boolean | StockExitDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDetail"]>

  export type StockExitDetailSelectScalar = {
    id?: boolean
    exitId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
  }

  export type StockExitDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exit?: boolean | StockExitDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }
  export type StockExitDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exit?: boolean | StockExitDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }

  export type $StockExitDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExitDetail"
    objects: {
      exit: Prisma.$StockExitPayload<ExtArgs>
      entry: Prisma.$StockEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      exitId: number
      entryId: number
      quantity: number
      unitCost: number
      subtotal: number
    }, ExtArgs["result"]["stockExitDetail"]>
    composites: {}
  }

  type StockExitDetailGetPayload<S extends boolean | null | undefined | StockExitDetailDefaultArgs> = $Result.GetResult<Prisma.$StockExitDetailPayload, S>

  type StockExitDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockExitDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockExitDetailCountAggregateInputType | true
    }

  export interface StockExitDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExitDetail'], meta: { name: 'StockExitDetail' } }
    /**
     * Find zero or one StockExitDetail that matches the filter.
     * @param {StockExitDetailFindUniqueArgs} args - Arguments to find a StockExitDetail
     * @example
     * // Get one StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitDetailFindUniqueArgs>(args: SelectSubset<T, StockExitDetailFindUniqueArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockExitDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockExitDetailFindUniqueOrThrowArgs} args - Arguments to find a StockExitDetail
     * @example
     * // Get one StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockExitDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailFindFirstArgs} args - Arguments to find a StockExitDetail
     * @example
     * // Get one StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitDetailFindFirstArgs>(args?: SelectSubset<T, StockExitDetailFindFirstArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockExitDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailFindFirstOrThrowArgs} args - Arguments to find a StockExitDetail
     * @example
     * // Get one StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockExitDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExitDetails
     * const stockExitDetails = await prisma.stockExitDetail.findMany()
     * 
     * // Get first 10 StockExitDetails
     * const stockExitDetails = await prisma.stockExitDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitDetailWithIdOnly = await prisma.stockExitDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitDetailFindManyArgs>(args?: SelectSubset<T, StockExitDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockExitDetail.
     * @param {StockExitDetailCreateArgs} args - Arguments to create a StockExitDetail.
     * @example
     * // Create one StockExitDetail
     * const StockExitDetail = await prisma.stockExitDetail.create({
     *   data: {
     *     // ... data to create a StockExitDetail
     *   }
     * })
     * 
     */
    create<T extends StockExitDetailCreateArgs>(args: SelectSubset<T, StockExitDetailCreateArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockExitDetails.
     * @param {StockExitDetailCreateManyArgs} args - Arguments to create many StockExitDetails.
     * @example
     * // Create many StockExitDetails
     * const stockExitDetail = await prisma.stockExitDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitDetailCreateManyArgs>(args?: SelectSubset<T, StockExitDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExitDetails and returns the data saved in the database.
     * @param {StockExitDetailCreateManyAndReturnArgs} args - Arguments to create many StockExitDetails.
     * @example
     * // Create many StockExitDetails
     * const stockExitDetail = await prisma.stockExitDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExitDetails and only return the `id`
     * const stockExitDetailWithIdOnly = await prisma.stockExitDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockExitDetail.
     * @param {StockExitDetailDeleteArgs} args - Arguments to delete one StockExitDetail.
     * @example
     * // Delete one StockExitDetail
     * const StockExitDetail = await prisma.stockExitDetail.delete({
     *   where: {
     *     // ... filter to delete one StockExitDetail
     *   }
     * })
     * 
     */
    delete<T extends StockExitDetailDeleteArgs>(args: SelectSubset<T, StockExitDetailDeleteArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockExitDetail.
     * @param {StockExitDetailUpdateArgs} args - Arguments to update one StockExitDetail.
     * @example
     * // Update one StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitDetailUpdateArgs>(args: SelectSubset<T, StockExitDetailUpdateArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockExitDetails.
     * @param {StockExitDetailDeleteManyArgs} args - Arguments to filter StockExitDetails to delete.
     * @example
     * // Delete a few StockExitDetails
     * const { count } = await prisma.stockExitDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDetailDeleteManyArgs>(args?: SelectSubset<T, StockExitDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExitDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExitDetails
     * const stockExitDetail = await prisma.stockExitDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitDetailUpdateManyArgs>(args: SelectSubset<T, StockExitDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockExitDetail.
     * @param {StockExitDetailUpsertArgs} args - Arguments to update or create a StockExitDetail.
     * @example
     * // Update or create a StockExitDetail
     * const stockExitDetail = await prisma.stockExitDetail.upsert({
     *   create: {
     *     // ... data to create a StockExitDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExitDetail we want to update
     *   }
     * })
     */
    upsert<T extends StockExitDetailUpsertArgs>(args: SelectSubset<T, StockExitDetailUpsertArgs<ExtArgs>>): Prisma__StockExitDetailClient<$Result.GetResult<Prisma.$StockExitDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockExitDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailCountArgs} args - Arguments to filter StockExitDetails to count.
     * @example
     * // Count the number of StockExitDetails
     * const count = await prisma.stockExitDetail.count({
     *   where: {
     *     // ... the filter for the StockExitDetails we want to count
     *   }
     * })
    **/
    count<T extends StockExitDetailCountArgs>(
      args?: Subset<T, StockExitDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExitDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockExitDetailAggregateArgs>(args: Subset<T, StockExitDetailAggregateArgs>): Prisma.PrismaPromise<GetStockExitDetailAggregateType<T>>

    /**
     * Group by StockExitDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDetailGroupByArgs} args - Group by arguments.
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
      T extends StockExitDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitDetailGroupByArgs['orderBy'] }
        : { orderBy?: StockExitDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockExitDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExitDetail model
   */
  readonly fields: StockExitDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExitDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    exit<T extends StockExitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockExitDefaultArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    entry<T extends StockEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockEntryDefaultArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockExitDetail model
   */ 
  interface StockExitDetailFieldRefs {
    readonly id: FieldRef<"StockExitDetail", 'Int'>
    readonly exitId: FieldRef<"StockExitDetail", 'Int'>
    readonly entryId: FieldRef<"StockExitDetail", 'Int'>
    readonly quantity: FieldRef<"StockExitDetail", 'Int'>
    readonly unitCost: FieldRef<"StockExitDetail", 'Float'>
    readonly subtotal: FieldRef<"StockExitDetail", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StockExitDetail findUnique
   */
  export type StockExitDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDetail to fetch.
     */
    where: StockExitDetailWhereUniqueInput
  }

  /**
   * StockExitDetail findUniqueOrThrow
   */
  export type StockExitDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDetail to fetch.
     */
    where: StockExitDetailWhereUniqueInput
  }

  /**
   * StockExitDetail findFirst
   */
  export type StockExitDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDetail to fetch.
     */
    where?: StockExitDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDetails to fetch.
     */
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDetails.
     */
    cursor?: StockExitDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDetails.
     */
    distinct?: StockExitDetailScalarFieldEnum | StockExitDetailScalarFieldEnum[]
  }

  /**
   * StockExitDetail findFirstOrThrow
   */
  export type StockExitDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDetail to fetch.
     */
    where?: StockExitDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDetails to fetch.
     */
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDetails.
     */
    cursor?: StockExitDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDetails.
     */
    distinct?: StockExitDetailScalarFieldEnum | StockExitDetailScalarFieldEnum[]
  }

  /**
   * StockExitDetail findMany
   */
  export type StockExitDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDetails to fetch.
     */
    where?: StockExitDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDetails to fetch.
     */
    orderBy?: StockExitDetailOrderByWithRelationInput | StockExitDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExitDetails.
     */
    cursor?: StockExitDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDetails.
     */
    skip?: number
    distinct?: StockExitDetailScalarFieldEnum | StockExitDetailScalarFieldEnum[]
  }

  /**
   * StockExitDetail create
   */
  export type StockExitDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExitDetail.
     */
    data: XOR<StockExitDetailCreateInput, StockExitDetailUncheckedCreateInput>
  }

  /**
   * StockExitDetail createMany
   */
  export type StockExitDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExitDetails.
     */
    data: StockExitDetailCreateManyInput | StockExitDetailCreateManyInput[]
  }

  /**
   * StockExitDetail createManyAndReturn
   */
  export type StockExitDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockExitDetails.
     */
    data: StockExitDetailCreateManyInput | StockExitDetailCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExitDetail update
   */
  export type StockExitDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExitDetail.
     */
    data: XOR<StockExitDetailUpdateInput, StockExitDetailUncheckedUpdateInput>
    /**
     * Choose, which StockExitDetail to update.
     */
    where: StockExitDetailWhereUniqueInput
  }

  /**
   * StockExitDetail updateMany
   */
  export type StockExitDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExitDetails.
     */
    data: XOR<StockExitDetailUpdateManyMutationInput, StockExitDetailUncheckedUpdateManyInput>
    /**
     * Filter which StockExitDetails to update
     */
    where?: StockExitDetailWhereInput
  }

  /**
   * StockExitDetail upsert
   */
  export type StockExitDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExitDetail to update in case it exists.
     */
    where: StockExitDetailWhereUniqueInput
    /**
     * In case the StockExitDetail found by the `where` argument doesn't exist, create a new StockExitDetail with this data.
     */
    create: XOR<StockExitDetailCreateInput, StockExitDetailUncheckedCreateInput>
    /**
     * In case the StockExitDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitDetailUpdateInput, StockExitDetailUncheckedUpdateInput>
  }

  /**
   * StockExitDetail delete
   */
  export type StockExitDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
    /**
     * Filter which StockExitDetail to delete.
     */
    where: StockExitDetailWhereUniqueInput
  }

  /**
   * StockExitDetail deleteMany
   */
  export type StockExitDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDetails to delete
     */
    where?: StockExitDetailWhereInput
  }

  /**
   * StockExitDetail without action
   */
  export type StockExitDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDetail
     */
    select?: StockExitDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDetailInclude<ExtArgs> | null
  }


  /**
   * Model StockExitDocument
   */

  export type AggregateStockExitDocument = {
    _count: StockExitDocumentCountAggregateOutputType | null
    _avg: StockExitDocumentAvgAggregateOutputType | null
    _sum: StockExitDocumentSumAggregateOutputType | null
    _min: StockExitDocumentMinAggregateOutputType | null
    _max: StockExitDocumentMaxAggregateOutputType | null
  }

  export type StockExitDocumentAvgAggregateOutputType = {
    id: number | null
    totalCost: number | null
  }

  export type StockExitDocumentSumAggregateOutputType = {
    id: number | null
    totalCost: number | null
  }

  export type StockExitDocumentMinAggregateOutputType = {
    id: number | null
    reference: string | null
    type: string | null
    totalCost: number | null
    documentDate: Date | null
    reason: string | null
    userId: string | null
  }

  export type StockExitDocumentMaxAggregateOutputType = {
    id: number | null
    reference: string | null
    type: string | null
    totalCost: number | null
    documentDate: Date | null
    reason: string | null
    userId: string | null
  }

  export type StockExitDocumentCountAggregateOutputType = {
    id: number
    reference: number
    type: number
    totalCost: number
    documentDate: number
    reason: number
    userId: number
    _all: number
  }


  export type StockExitDocumentAvgAggregateInputType = {
    id?: true
    totalCost?: true
  }

  export type StockExitDocumentSumAggregateInputType = {
    id?: true
    totalCost?: true
  }

  export type StockExitDocumentMinAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    totalCost?: true
    documentDate?: true
    reason?: true
    userId?: true
  }

  export type StockExitDocumentMaxAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    totalCost?: true
    documentDate?: true
    reason?: true
    userId?: true
  }

  export type StockExitDocumentCountAggregateInputType = {
    id?: true
    reference?: true
    type?: true
    totalCost?: true
    documentDate?: true
    reason?: true
    userId?: true
    _all?: true
  }

  export type StockExitDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocument to aggregate.
     */
    where?: StockExitDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocuments to fetch.
     */
    orderBy?: StockExitDocumentOrderByWithRelationInput | StockExitDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExitDocuments
    **/
    _count?: true | StockExitDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitDocumentMaxAggregateInputType
  }

  export type GetStockExitDocumentAggregateType<T extends StockExitDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExitDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExitDocument[P]>
      : GetScalarType<T[P], AggregateStockExitDocument[P]>
  }




  export type StockExitDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentWhereInput
    orderBy?: StockExitDocumentOrderByWithAggregationInput | StockExitDocumentOrderByWithAggregationInput[]
    by: StockExitDocumentScalarFieldEnum[] | StockExitDocumentScalarFieldEnum
    having?: StockExitDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitDocumentCountAggregateInputType | true
    _avg?: StockExitDocumentAvgAggregateInputType
    _sum?: StockExitDocumentSumAggregateInputType
    _min?: StockExitDocumentMinAggregateInputType
    _max?: StockExitDocumentMaxAggregateInputType
  }

  export type StockExitDocumentGroupByOutputType = {
    id: number
    reference: string
    type: string
    totalCost: number
    documentDate: Date
    reason: string | null
    userId: string | null
    _count: StockExitDocumentCountAggregateOutputType | null
    _avg: StockExitDocumentAvgAggregateOutputType | null
    _sum: StockExitDocumentSumAggregateOutputType | null
    _min: StockExitDocumentMinAggregateOutputType | null
    _max: StockExitDocumentMaxAggregateOutputType | null
  }

  type GetStockExitDocumentGroupByPayload<T extends StockExitDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitDocumentGroupByOutputType[P]>
        }
      >
    >


  export type StockExitDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    totalCost?: boolean
    documentDate?: boolean
    reason?: boolean
    userId?: boolean
    lines?: boolean | StockExitDocument$linesArgs<ExtArgs>
    _count?: boolean | StockExitDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDocument"]>

  export type StockExitDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reference?: boolean
    type?: boolean
    totalCost?: boolean
    documentDate?: boolean
    reason?: boolean
    userId?: boolean
  }, ExtArgs["result"]["stockExitDocument"]>

  export type StockExitDocumentSelectScalar = {
    id?: boolean
    reference?: boolean
    type?: boolean
    totalCost?: boolean
    documentDate?: boolean
    reason?: boolean
    userId?: boolean
  }

  export type StockExitDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    lines?: boolean | StockExitDocument$linesArgs<ExtArgs>
    _count?: boolean | StockExitDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockExitDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StockExitDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExitDocument"
    objects: {
      lines: Prisma.$StockExitDocumentLinePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reference: string
      type: string
      totalCost: number
      documentDate: Date
      reason: string | null
      userId: string | null
    }, ExtArgs["result"]["stockExitDocument"]>
    composites: {}
  }

  type StockExitDocumentGetPayload<S extends boolean | null | undefined | StockExitDocumentDefaultArgs> = $Result.GetResult<Prisma.$StockExitDocumentPayload, S>

  type StockExitDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockExitDocumentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockExitDocumentCountAggregateInputType | true
    }

  export interface StockExitDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExitDocument'], meta: { name: 'StockExitDocument' } }
    /**
     * Find zero or one StockExitDocument that matches the filter.
     * @param {StockExitDocumentFindUniqueArgs} args - Arguments to find a StockExitDocument
     * @example
     * // Get one StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitDocumentFindUniqueArgs>(args: SelectSubset<T, StockExitDocumentFindUniqueArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockExitDocument that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockExitDocumentFindUniqueOrThrowArgs} args - Arguments to find a StockExitDocument
     * @example
     * // Get one StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockExitDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentFindFirstArgs} args - Arguments to find a StockExitDocument
     * @example
     * // Get one StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitDocumentFindFirstArgs>(args?: SelectSubset<T, StockExitDocumentFindFirstArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockExitDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentFindFirstOrThrowArgs} args - Arguments to find a StockExitDocument
     * @example
     * // Get one StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockExitDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExitDocuments
     * const stockExitDocuments = await prisma.stockExitDocument.findMany()
     * 
     * // Get first 10 StockExitDocuments
     * const stockExitDocuments = await prisma.stockExitDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitDocumentWithIdOnly = await prisma.stockExitDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitDocumentFindManyArgs>(args?: SelectSubset<T, StockExitDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockExitDocument.
     * @param {StockExitDocumentCreateArgs} args - Arguments to create a StockExitDocument.
     * @example
     * // Create one StockExitDocument
     * const StockExitDocument = await prisma.stockExitDocument.create({
     *   data: {
     *     // ... data to create a StockExitDocument
     *   }
     * })
     * 
     */
    create<T extends StockExitDocumentCreateArgs>(args: SelectSubset<T, StockExitDocumentCreateArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockExitDocuments.
     * @param {StockExitDocumentCreateManyArgs} args - Arguments to create many StockExitDocuments.
     * @example
     * // Create many StockExitDocuments
     * const stockExitDocument = await prisma.stockExitDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitDocumentCreateManyArgs>(args?: SelectSubset<T, StockExitDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExitDocuments and returns the data saved in the database.
     * @param {StockExitDocumentCreateManyAndReturnArgs} args - Arguments to create many StockExitDocuments.
     * @example
     * // Create many StockExitDocuments
     * const stockExitDocument = await prisma.stockExitDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExitDocuments and only return the `id`
     * const stockExitDocumentWithIdOnly = await prisma.stockExitDocument.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockExitDocument.
     * @param {StockExitDocumentDeleteArgs} args - Arguments to delete one StockExitDocument.
     * @example
     * // Delete one StockExitDocument
     * const StockExitDocument = await prisma.stockExitDocument.delete({
     *   where: {
     *     // ... filter to delete one StockExitDocument
     *   }
     * })
     * 
     */
    delete<T extends StockExitDocumentDeleteArgs>(args: SelectSubset<T, StockExitDocumentDeleteArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockExitDocument.
     * @param {StockExitDocumentUpdateArgs} args - Arguments to update one StockExitDocument.
     * @example
     * // Update one StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitDocumentUpdateArgs>(args: SelectSubset<T, StockExitDocumentUpdateArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockExitDocuments.
     * @param {StockExitDocumentDeleteManyArgs} args - Arguments to filter StockExitDocuments to delete.
     * @example
     * // Delete a few StockExitDocuments
     * const { count } = await prisma.stockExitDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDocumentDeleteManyArgs>(args?: SelectSubset<T, StockExitDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExitDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExitDocuments
     * const stockExitDocument = await prisma.stockExitDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitDocumentUpdateManyArgs>(args: SelectSubset<T, StockExitDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockExitDocument.
     * @param {StockExitDocumentUpsertArgs} args - Arguments to update or create a StockExitDocument.
     * @example
     * // Update or create a StockExitDocument
     * const stockExitDocument = await prisma.stockExitDocument.upsert({
     *   create: {
     *     // ... data to create a StockExitDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExitDocument we want to update
     *   }
     * })
     */
    upsert<T extends StockExitDocumentUpsertArgs>(args: SelectSubset<T, StockExitDocumentUpsertArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockExitDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentCountArgs} args - Arguments to filter StockExitDocuments to count.
     * @example
     * // Count the number of StockExitDocuments
     * const count = await prisma.stockExitDocument.count({
     *   where: {
     *     // ... the filter for the StockExitDocuments we want to count
     *   }
     * })
    **/
    count<T extends StockExitDocumentCountArgs>(
      args?: Subset<T, StockExitDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExitDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockExitDocumentAggregateArgs>(args: Subset<T, StockExitDocumentAggregateArgs>): Prisma.PrismaPromise<GetStockExitDocumentAggregateType<T>>

    /**
     * Group by StockExitDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentGroupByArgs} args - Group by arguments.
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
      T extends StockExitDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitDocumentGroupByArgs['orderBy'] }
        : { orderBy?: StockExitDocumentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockExitDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExitDocument model
   */
  readonly fields: StockExitDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExitDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    lines<T extends StockExitDocument$linesArgs<ExtArgs> = {}>(args?: Subset<T, StockExitDocument$linesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StockExitDocument model
   */ 
  interface StockExitDocumentFieldRefs {
    readonly id: FieldRef<"StockExitDocument", 'Int'>
    readonly reference: FieldRef<"StockExitDocument", 'String'>
    readonly type: FieldRef<"StockExitDocument", 'String'>
    readonly totalCost: FieldRef<"StockExitDocument", 'Float'>
    readonly documentDate: FieldRef<"StockExitDocument", 'DateTime'>
    readonly reason: FieldRef<"StockExitDocument", 'String'>
    readonly userId: FieldRef<"StockExitDocument", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockExitDocument findUnique
   */
  export type StockExitDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocument to fetch.
     */
    where: StockExitDocumentWhereUniqueInput
  }

  /**
   * StockExitDocument findUniqueOrThrow
   */
  export type StockExitDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocument to fetch.
     */
    where: StockExitDocumentWhereUniqueInput
  }

  /**
   * StockExitDocument findFirst
   */
  export type StockExitDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocument to fetch.
     */
    where?: StockExitDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocuments to fetch.
     */
    orderBy?: StockExitDocumentOrderByWithRelationInput | StockExitDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocuments.
     */
    cursor?: StockExitDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocuments.
     */
    distinct?: StockExitDocumentScalarFieldEnum | StockExitDocumentScalarFieldEnum[]
  }

  /**
   * StockExitDocument findFirstOrThrow
   */
  export type StockExitDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocument to fetch.
     */
    where?: StockExitDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocuments to fetch.
     */
    orderBy?: StockExitDocumentOrderByWithRelationInput | StockExitDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocuments.
     */
    cursor?: StockExitDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocuments.
     */
    distinct?: StockExitDocumentScalarFieldEnum | StockExitDocumentScalarFieldEnum[]
  }

  /**
   * StockExitDocument findMany
   */
  export type StockExitDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocuments to fetch.
     */
    where?: StockExitDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocuments to fetch.
     */
    orderBy?: StockExitDocumentOrderByWithRelationInput | StockExitDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExitDocuments.
     */
    cursor?: StockExitDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocuments.
     */
    skip?: number
    distinct?: StockExitDocumentScalarFieldEnum | StockExitDocumentScalarFieldEnum[]
  }

  /**
   * StockExitDocument create
   */
  export type StockExitDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExitDocument.
     */
    data: XOR<StockExitDocumentCreateInput, StockExitDocumentUncheckedCreateInput>
  }

  /**
   * StockExitDocument createMany
   */
  export type StockExitDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExitDocuments.
     */
    data: StockExitDocumentCreateManyInput | StockExitDocumentCreateManyInput[]
  }

  /**
   * StockExitDocument createManyAndReturn
   */
  export type StockExitDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockExitDocuments.
     */
    data: StockExitDocumentCreateManyInput | StockExitDocumentCreateManyInput[]
  }

  /**
   * StockExitDocument update
   */
  export type StockExitDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExitDocument.
     */
    data: XOR<StockExitDocumentUpdateInput, StockExitDocumentUncheckedUpdateInput>
    /**
     * Choose, which StockExitDocument to update.
     */
    where: StockExitDocumentWhereUniqueInput
  }

  /**
   * StockExitDocument updateMany
   */
  export type StockExitDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExitDocuments.
     */
    data: XOR<StockExitDocumentUpdateManyMutationInput, StockExitDocumentUncheckedUpdateManyInput>
    /**
     * Filter which StockExitDocuments to update
     */
    where?: StockExitDocumentWhereInput
  }

  /**
   * StockExitDocument upsert
   */
  export type StockExitDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExitDocument to update in case it exists.
     */
    where: StockExitDocumentWhereUniqueInput
    /**
     * In case the StockExitDocument found by the `where` argument doesn't exist, create a new StockExitDocument with this data.
     */
    create: XOR<StockExitDocumentCreateInput, StockExitDocumentUncheckedCreateInput>
    /**
     * In case the StockExitDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitDocumentUpdateInput, StockExitDocumentUncheckedUpdateInput>
  }

  /**
   * StockExitDocument delete
   */
  export type StockExitDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
    /**
     * Filter which StockExitDocument to delete.
     */
    where: StockExitDocumentWhereUniqueInput
  }

  /**
   * StockExitDocument deleteMany
   */
  export type StockExitDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocuments to delete
     */
    where?: StockExitDocumentWhereInput
  }

  /**
   * StockExitDocument.lines
   */
  export type StockExitDocument$linesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    where?: StockExitDocumentLineWhereInput
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    cursor?: StockExitDocumentLineWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDocumentLineScalarFieldEnum | StockExitDocumentLineScalarFieldEnum[]
  }

  /**
   * StockExitDocument without action
   */
  export type StockExitDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocument
     */
    select?: StockExitDocumentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentInclude<ExtArgs> | null
  }


  /**
   * Model StockExitDocumentLine
   */

  export type AggregateStockExitDocumentLine = {
    _count: StockExitDocumentLineCountAggregateOutputType | null
    _avg: StockExitDocumentLineAvgAggregateOutputType | null
    _sum: StockExitDocumentLineSumAggregateOutputType | null
    _min: StockExitDocumentLineMinAggregateOutputType | null
    _max: StockExitDocumentLineMaxAggregateOutputType | null
  }

  export type StockExitDocumentLineAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitDocumentLineSumAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitDocumentLineMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitDocumentLineMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    productId: number | null
    quantity: number | null
    totalCost: number | null
  }

  export type StockExitDocumentLineCountAggregateOutputType = {
    id: number
    documentId: number
    productId: number
    quantity: number
    totalCost: number
    _all: number
  }


  export type StockExitDocumentLineAvgAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitDocumentLineSumAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitDocumentLineMinAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitDocumentLineMaxAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    quantity?: true
    totalCost?: true
  }

  export type StockExitDocumentLineCountAggregateInputType = {
    id?: true
    documentId?: true
    productId?: true
    quantity?: true
    totalCost?: true
    _all?: true
  }

  export type StockExitDocumentLineAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocumentLine to aggregate.
     */
    where?: StockExitDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLines to fetch.
     */
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExitDocumentLines
    **/
    _count?: true | StockExitDocumentLineCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitDocumentLineAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitDocumentLineSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitDocumentLineMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitDocumentLineMaxAggregateInputType
  }

  export type GetStockExitDocumentLineAggregateType<T extends StockExitDocumentLineAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExitDocumentLine]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExitDocumentLine[P]>
      : GetScalarType<T[P], AggregateStockExitDocumentLine[P]>
  }




  export type StockExitDocumentLineGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineWhereInput
    orderBy?: StockExitDocumentLineOrderByWithAggregationInput | StockExitDocumentLineOrderByWithAggregationInput[]
    by: StockExitDocumentLineScalarFieldEnum[] | StockExitDocumentLineScalarFieldEnum
    having?: StockExitDocumentLineScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitDocumentLineCountAggregateInputType | true
    _avg?: StockExitDocumentLineAvgAggregateInputType
    _sum?: StockExitDocumentLineSumAggregateInputType
    _min?: StockExitDocumentLineMinAggregateInputType
    _max?: StockExitDocumentLineMaxAggregateInputType
  }

  export type StockExitDocumentLineGroupByOutputType = {
    id: number
    documentId: number
    productId: number
    quantity: number
    totalCost: number
    _count: StockExitDocumentLineCountAggregateOutputType | null
    _avg: StockExitDocumentLineAvgAggregateOutputType | null
    _sum: StockExitDocumentLineSumAggregateOutputType | null
    _min: StockExitDocumentLineMinAggregateOutputType | null
    _max: StockExitDocumentLineMaxAggregateOutputType | null
  }

  type GetStockExitDocumentLineGroupByPayload<T extends StockExitDocumentLineGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitDocumentLineGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitDocumentLineGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitDocumentLineGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitDocumentLineGroupByOutputType[P]>
        }
      >
    >


  export type StockExitDocumentLineSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    productId?: boolean
    quantity?: boolean
    totalCost?: boolean
    document?: boolean | StockExitDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    details?: boolean | StockExitDocumentLine$detailsArgs<ExtArgs>
    _count?: boolean | StockExitDocumentLineCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDocumentLine"]>

  export type StockExitDocumentLineSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    productId?: boolean
    quantity?: boolean
    totalCost?: boolean
    document?: boolean | StockExitDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDocumentLine"]>

  export type StockExitDocumentLineSelectScalar = {
    id?: boolean
    documentId?: boolean
    productId?: boolean
    quantity?: boolean
    totalCost?: boolean
  }

  export type StockExitDocumentLineInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | StockExitDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
    details?: boolean | StockExitDocumentLine$detailsArgs<ExtArgs>
    _count?: boolean | StockExitDocumentLineCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StockExitDocumentLineIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | StockExitDocumentDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockExitDocumentLinePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExitDocumentLine"
    objects: {
      document: Prisma.$StockExitDocumentPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
      details: Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      productId: number
      quantity: number
      totalCost: number
    }, ExtArgs["result"]["stockExitDocumentLine"]>
    composites: {}
  }

  type StockExitDocumentLineGetPayload<S extends boolean | null | undefined | StockExitDocumentLineDefaultArgs> = $Result.GetResult<Prisma.$StockExitDocumentLinePayload, S>

  type StockExitDocumentLineCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockExitDocumentLineFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockExitDocumentLineCountAggregateInputType | true
    }

  export interface StockExitDocumentLineDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExitDocumentLine'], meta: { name: 'StockExitDocumentLine' } }
    /**
     * Find zero or one StockExitDocumentLine that matches the filter.
     * @param {StockExitDocumentLineFindUniqueArgs} args - Arguments to find a StockExitDocumentLine
     * @example
     * // Get one StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitDocumentLineFindUniqueArgs>(args: SelectSubset<T, StockExitDocumentLineFindUniqueArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockExitDocumentLine that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockExitDocumentLineFindUniqueOrThrowArgs} args - Arguments to find a StockExitDocumentLine
     * @example
     * // Get one StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitDocumentLineFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitDocumentLineFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockExitDocumentLine that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineFindFirstArgs} args - Arguments to find a StockExitDocumentLine
     * @example
     * // Get one StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitDocumentLineFindFirstArgs>(args?: SelectSubset<T, StockExitDocumentLineFindFirstArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockExitDocumentLine that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineFindFirstOrThrowArgs} args - Arguments to find a StockExitDocumentLine
     * @example
     * // Get one StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitDocumentLineFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitDocumentLineFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockExitDocumentLines that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExitDocumentLines
     * const stockExitDocumentLines = await prisma.stockExitDocumentLine.findMany()
     * 
     * // Get first 10 StockExitDocumentLines
     * const stockExitDocumentLines = await prisma.stockExitDocumentLine.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitDocumentLineWithIdOnly = await prisma.stockExitDocumentLine.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitDocumentLineFindManyArgs>(args?: SelectSubset<T, StockExitDocumentLineFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockExitDocumentLine.
     * @param {StockExitDocumentLineCreateArgs} args - Arguments to create a StockExitDocumentLine.
     * @example
     * // Create one StockExitDocumentLine
     * const StockExitDocumentLine = await prisma.stockExitDocumentLine.create({
     *   data: {
     *     // ... data to create a StockExitDocumentLine
     *   }
     * })
     * 
     */
    create<T extends StockExitDocumentLineCreateArgs>(args: SelectSubset<T, StockExitDocumentLineCreateArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockExitDocumentLines.
     * @param {StockExitDocumentLineCreateManyArgs} args - Arguments to create many StockExitDocumentLines.
     * @example
     * // Create many StockExitDocumentLines
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitDocumentLineCreateManyArgs>(args?: SelectSubset<T, StockExitDocumentLineCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExitDocumentLines and returns the data saved in the database.
     * @param {StockExitDocumentLineCreateManyAndReturnArgs} args - Arguments to create many StockExitDocumentLines.
     * @example
     * // Create many StockExitDocumentLines
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExitDocumentLines and only return the `id`
     * const stockExitDocumentLineWithIdOnly = await prisma.stockExitDocumentLine.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitDocumentLineCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitDocumentLineCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockExitDocumentLine.
     * @param {StockExitDocumentLineDeleteArgs} args - Arguments to delete one StockExitDocumentLine.
     * @example
     * // Delete one StockExitDocumentLine
     * const StockExitDocumentLine = await prisma.stockExitDocumentLine.delete({
     *   where: {
     *     // ... filter to delete one StockExitDocumentLine
     *   }
     * })
     * 
     */
    delete<T extends StockExitDocumentLineDeleteArgs>(args: SelectSubset<T, StockExitDocumentLineDeleteArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockExitDocumentLine.
     * @param {StockExitDocumentLineUpdateArgs} args - Arguments to update one StockExitDocumentLine.
     * @example
     * // Update one StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitDocumentLineUpdateArgs>(args: SelectSubset<T, StockExitDocumentLineUpdateArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockExitDocumentLines.
     * @param {StockExitDocumentLineDeleteManyArgs} args - Arguments to filter StockExitDocumentLines to delete.
     * @example
     * // Delete a few StockExitDocumentLines
     * const { count } = await prisma.stockExitDocumentLine.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDocumentLineDeleteManyArgs>(args?: SelectSubset<T, StockExitDocumentLineDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExitDocumentLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExitDocumentLines
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitDocumentLineUpdateManyArgs>(args: SelectSubset<T, StockExitDocumentLineUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockExitDocumentLine.
     * @param {StockExitDocumentLineUpsertArgs} args - Arguments to update or create a StockExitDocumentLine.
     * @example
     * // Update or create a StockExitDocumentLine
     * const stockExitDocumentLine = await prisma.stockExitDocumentLine.upsert({
     *   create: {
     *     // ... data to create a StockExitDocumentLine
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExitDocumentLine we want to update
     *   }
     * })
     */
    upsert<T extends StockExitDocumentLineUpsertArgs>(args: SelectSubset<T, StockExitDocumentLineUpsertArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockExitDocumentLines.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineCountArgs} args - Arguments to filter StockExitDocumentLines to count.
     * @example
     * // Count the number of StockExitDocumentLines
     * const count = await prisma.stockExitDocumentLine.count({
     *   where: {
     *     // ... the filter for the StockExitDocumentLines we want to count
     *   }
     * })
    **/
    count<T extends StockExitDocumentLineCountArgs>(
      args?: Subset<T, StockExitDocumentLineCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitDocumentLineCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExitDocumentLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockExitDocumentLineAggregateArgs>(args: Subset<T, StockExitDocumentLineAggregateArgs>): Prisma.PrismaPromise<GetStockExitDocumentLineAggregateType<T>>

    /**
     * Group by StockExitDocumentLine.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineGroupByArgs} args - Group by arguments.
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
      T extends StockExitDocumentLineGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitDocumentLineGroupByArgs['orderBy'] }
        : { orderBy?: StockExitDocumentLineGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockExitDocumentLineGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitDocumentLineGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExitDocumentLine model
   */
  readonly fields: StockExitDocumentLineFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExitDocumentLine.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitDocumentLineClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends StockExitDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockExitDocumentDefaultArgs<ExtArgs>>): Prisma__StockExitDocumentClient<$Result.GetResult<Prisma.$StockExitDocumentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    details<T extends StockExitDocumentLine$detailsArgs<ExtArgs> = {}>(args?: Subset<T, StockExitDocumentLine$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the StockExitDocumentLine model
   */ 
  interface StockExitDocumentLineFieldRefs {
    readonly id: FieldRef<"StockExitDocumentLine", 'Int'>
    readonly documentId: FieldRef<"StockExitDocumentLine", 'Int'>
    readonly productId: FieldRef<"StockExitDocumentLine", 'Int'>
    readonly quantity: FieldRef<"StockExitDocumentLine", 'Int'>
    readonly totalCost: FieldRef<"StockExitDocumentLine", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StockExitDocumentLine findUnique
   */
  export type StockExitDocumentLineFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLine to fetch.
     */
    where: StockExitDocumentLineWhereUniqueInput
  }

  /**
   * StockExitDocumentLine findUniqueOrThrow
   */
  export type StockExitDocumentLineFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLine to fetch.
     */
    where: StockExitDocumentLineWhereUniqueInput
  }

  /**
   * StockExitDocumentLine findFirst
   */
  export type StockExitDocumentLineFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLine to fetch.
     */
    where?: StockExitDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLines to fetch.
     */
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocumentLines.
     */
    cursor?: StockExitDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocumentLines.
     */
    distinct?: StockExitDocumentLineScalarFieldEnum | StockExitDocumentLineScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLine findFirstOrThrow
   */
  export type StockExitDocumentLineFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLine to fetch.
     */
    where?: StockExitDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLines to fetch.
     */
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocumentLines.
     */
    cursor?: StockExitDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLines.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocumentLines.
     */
    distinct?: StockExitDocumentLineScalarFieldEnum | StockExitDocumentLineScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLine findMany
   */
  export type StockExitDocumentLineFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLines to fetch.
     */
    where?: StockExitDocumentLineWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLines to fetch.
     */
    orderBy?: StockExitDocumentLineOrderByWithRelationInput | StockExitDocumentLineOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExitDocumentLines.
     */
    cursor?: StockExitDocumentLineWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLines from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLines.
     */
    skip?: number
    distinct?: StockExitDocumentLineScalarFieldEnum | StockExitDocumentLineScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLine create
   */
  export type StockExitDocumentLineCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExitDocumentLine.
     */
    data: XOR<StockExitDocumentLineCreateInput, StockExitDocumentLineUncheckedCreateInput>
  }

  /**
   * StockExitDocumentLine createMany
   */
  export type StockExitDocumentLineCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExitDocumentLines.
     */
    data: StockExitDocumentLineCreateManyInput | StockExitDocumentLineCreateManyInput[]
  }

  /**
   * StockExitDocumentLine createManyAndReturn
   */
  export type StockExitDocumentLineCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockExitDocumentLines.
     */
    data: StockExitDocumentLineCreateManyInput | StockExitDocumentLineCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExitDocumentLine update
   */
  export type StockExitDocumentLineUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExitDocumentLine.
     */
    data: XOR<StockExitDocumentLineUpdateInput, StockExitDocumentLineUncheckedUpdateInput>
    /**
     * Choose, which StockExitDocumentLine to update.
     */
    where: StockExitDocumentLineWhereUniqueInput
  }

  /**
   * StockExitDocumentLine updateMany
   */
  export type StockExitDocumentLineUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExitDocumentLines.
     */
    data: XOR<StockExitDocumentLineUpdateManyMutationInput, StockExitDocumentLineUncheckedUpdateManyInput>
    /**
     * Filter which StockExitDocumentLines to update
     */
    where?: StockExitDocumentLineWhereInput
  }

  /**
   * StockExitDocumentLine upsert
   */
  export type StockExitDocumentLineUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExitDocumentLine to update in case it exists.
     */
    where: StockExitDocumentLineWhereUniqueInput
    /**
     * In case the StockExitDocumentLine found by the `where` argument doesn't exist, create a new StockExitDocumentLine with this data.
     */
    create: XOR<StockExitDocumentLineCreateInput, StockExitDocumentLineUncheckedCreateInput>
    /**
     * In case the StockExitDocumentLine was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitDocumentLineUpdateInput, StockExitDocumentLineUncheckedUpdateInput>
  }

  /**
   * StockExitDocumentLine delete
   */
  export type StockExitDocumentLineDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
    /**
     * Filter which StockExitDocumentLine to delete.
     */
    where: StockExitDocumentLineWhereUniqueInput
  }

  /**
   * StockExitDocumentLine deleteMany
   */
  export type StockExitDocumentLineDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocumentLines to delete
     */
    where?: StockExitDocumentLineWhereInput
  }

  /**
   * StockExitDocumentLine.details
   */
  export type StockExitDocumentLine$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    where?: StockExitDocumentLineDetailWhereInput
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitDocumentLineDetailScalarFieldEnum | StockExitDocumentLineDetailScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLine without action
   */
  export type StockExitDocumentLineDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLine
     */
    select?: StockExitDocumentLineSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineInclude<ExtArgs> | null
  }


  /**
   * Model StockExitDocumentLineDetail
   */

  export type AggregateStockExitDocumentLineDetail = {
    _count: StockExitDocumentLineDetailCountAggregateOutputType | null
    _avg: StockExitDocumentLineDetailAvgAggregateOutputType | null
    _sum: StockExitDocumentLineDetailSumAggregateOutputType | null
    _min: StockExitDocumentLineDetailMinAggregateOutputType | null
    _max: StockExitDocumentLineDetailMaxAggregateOutputType | null
  }

  export type StockExitDocumentLineDetailAvgAggregateOutputType = {
    id: number | null
    lineId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDocumentLineDetailSumAggregateOutputType = {
    id: number | null
    lineId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDocumentLineDetailMinAggregateOutputType = {
    id: number | null
    lineId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDocumentLineDetailMaxAggregateOutputType = {
    id: number | null
    lineId: number | null
    entryId: number | null
    quantity: number | null
    unitCost: number | null
    subtotal: number | null
  }

  export type StockExitDocumentLineDetailCountAggregateOutputType = {
    id: number
    lineId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
    _all: number
  }


  export type StockExitDocumentLineDetailAvgAggregateInputType = {
    id?: true
    lineId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDocumentLineDetailSumAggregateInputType = {
    id?: true
    lineId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDocumentLineDetailMinAggregateInputType = {
    id?: true
    lineId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDocumentLineDetailMaxAggregateInputType = {
    id?: true
    lineId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
  }

  export type StockExitDocumentLineDetailCountAggregateInputType = {
    id?: true
    lineId?: true
    entryId?: true
    quantity?: true
    unitCost?: true
    subtotal?: true
    _all?: true
  }

  export type StockExitDocumentLineDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocumentLineDetail to aggregate.
     */
    where?: StockExitDocumentLineDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLineDetails to fetch.
     */
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLineDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLineDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExitDocumentLineDetails
    **/
    _count?: true | StockExitDocumentLineDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitDocumentLineDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitDocumentLineDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitDocumentLineDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitDocumentLineDetailMaxAggregateInputType
  }

  export type GetStockExitDocumentLineDetailAggregateType<T extends StockExitDocumentLineDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExitDocumentLineDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExitDocumentLineDetail[P]>
      : GetScalarType<T[P], AggregateStockExitDocumentLineDetail[P]>
  }




  export type StockExitDocumentLineDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitDocumentLineDetailWhereInput
    orderBy?: StockExitDocumentLineDetailOrderByWithAggregationInput | StockExitDocumentLineDetailOrderByWithAggregationInput[]
    by: StockExitDocumentLineDetailScalarFieldEnum[] | StockExitDocumentLineDetailScalarFieldEnum
    having?: StockExitDocumentLineDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitDocumentLineDetailCountAggregateInputType | true
    _avg?: StockExitDocumentLineDetailAvgAggregateInputType
    _sum?: StockExitDocumentLineDetailSumAggregateInputType
    _min?: StockExitDocumentLineDetailMinAggregateInputType
    _max?: StockExitDocumentLineDetailMaxAggregateInputType
  }

  export type StockExitDocumentLineDetailGroupByOutputType = {
    id: number
    lineId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
    _count: StockExitDocumentLineDetailCountAggregateOutputType | null
    _avg: StockExitDocumentLineDetailAvgAggregateOutputType | null
    _sum: StockExitDocumentLineDetailSumAggregateOutputType | null
    _min: StockExitDocumentLineDetailMinAggregateOutputType | null
    _max: StockExitDocumentLineDetailMaxAggregateOutputType | null
  }

  type GetStockExitDocumentLineDetailGroupByPayload<T extends StockExitDocumentLineDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitDocumentLineDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitDocumentLineDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitDocumentLineDetailGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitDocumentLineDetailGroupByOutputType[P]>
        }
      >
    >


  export type StockExitDocumentLineDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
    line?: boolean | StockExitDocumentLineDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDocumentLineDetail"]>

  export type StockExitDocumentLineDetailSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
    line?: boolean | StockExitDocumentLineDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockExitDocumentLineDetail"]>

  export type StockExitDocumentLineDetailSelectScalar = {
    id?: boolean
    lineId?: boolean
    entryId?: boolean
    quantity?: boolean
    unitCost?: boolean
    subtotal?: boolean
  }

  export type StockExitDocumentLineDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line?: boolean | StockExitDocumentLineDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }
  export type StockExitDocumentLineDetailIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    line?: boolean | StockExitDocumentLineDefaultArgs<ExtArgs>
    entry?: boolean | StockEntryDefaultArgs<ExtArgs>
  }

  export type $StockExitDocumentLineDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExitDocumentLineDetail"
    objects: {
      line: Prisma.$StockExitDocumentLinePayload<ExtArgs>
      entry: Prisma.$StockEntryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      lineId: number
      entryId: number
      quantity: number
      unitCost: number
      subtotal: number
    }, ExtArgs["result"]["stockExitDocumentLineDetail"]>
    composites: {}
  }

  type StockExitDocumentLineDetailGetPayload<S extends boolean | null | undefined | StockExitDocumentLineDetailDefaultArgs> = $Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload, S>

  type StockExitDocumentLineDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StockExitDocumentLineDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StockExitDocumentLineDetailCountAggregateInputType | true
    }

  export interface StockExitDocumentLineDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExitDocumentLineDetail'], meta: { name: 'StockExitDocumentLineDetail' } }
    /**
     * Find zero or one StockExitDocumentLineDetail that matches the filter.
     * @param {StockExitDocumentLineDetailFindUniqueArgs} args - Arguments to find a StockExitDocumentLineDetail
     * @example
     * // Get one StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitDocumentLineDetailFindUniqueArgs>(args: SelectSubset<T, StockExitDocumentLineDetailFindUniqueArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StockExitDocumentLineDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StockExitDocumentLineDetailFindUniqueOrThrowArgs} args - Arguments to find a StockExitDocumentLineDetail
     * @example
     * // Get one StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitDocumentLineDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitDocumentLineDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StockExitDocumentLineDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailFindFirstArgs} args - Arguments to find a StockExitDocumentLineDetail
     * @example
     * // Get one StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitDocumentLineDetailFindFirstArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailFindFirstArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StockExitDocumentLineDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailFindFirstOrThrowArgs} args - Arguments to find a StockExitDocumentLineDetail
     * @example
     * // Get one StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitDocumentLineDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StockExitDocumentLineDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExitDocumentLineDetails
     * const stockExitDocumentLineDetails = await prisma.stockExitDocumentLineDetail.findMany()
     * 
     * // Get first 10 StockExitDocumentLineDetails
     * const stockExitDocumentLineDetails = await prisma.stockExitDocumentLineDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitDocumentLineDetailWithIdOnly = await prisma.stockExitDocumentLineDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitDocumentLineDetailFindManyArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StockExitDocumentLineDetail.
     * @param {StockExitDocumentLineDetailCreateArgs} args - Arguments to create a StockExitDocumentLineDetail.
     * @example
     * // Create one StockExitDocumentLineDetail
     * const StockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.create({
     *   data: {
     *     // ... data to create a StockExitDocumentLineDetail
     *   }
     * })
     * 
     */
    create<T extends StockExitDocumentLineDetailCreateArgs>(args: SelectSubset<T, StockExitDocumentLineDetailCreateArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StockExitDocumentLineDetails.
     * @param {StockExitDocumentLineDetailCreateManyArgs} args - Arguments to create many StockExitDocumentLineDetails.
     * @example
     * // Create many StockExitDocumentLineDetails
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitDocumentLineDetailCreateManyArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExitDocumentLineDetails and returns the data saved in the database.
     * @param {StockExitDocumentLineDetailCreateManyAndReturnArgs} args - Arguments to create many StockExitDocumentLineDetails.
     * @example
     * // Create many StockExitDocumentLineDetails
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExitDocumentLineDetails and only return the `id`
     * const stockExitDocumentLineDetailWithIdOnly = await prisma.stockExitDocumentLineDetail.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitDocumentLineDetailCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StockExitDocumentLineDetail.
     * @param {StockExitDocumentLineDetailDeleteArgs} args - Arguments to delete one StockExitDocumentLineDetail.
     * @example
     * // Delete one StockExitDocumentLineDetail
     * const StockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.delete({
     *   where: {
     *     // ... filter to delete one StockExitDocumentLineDetail
     *   }
     * })
     * 
     */
    delete<T extends StockExitDocumentLineDetailDeleteArgs>(args: SelectSubset<T, StockExitDocumentLineDetailDeleteArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StockExitDocumentLineDetail.
     * @param {StockExitDocumentLineDetailUpdateArgs} args - Arguments to update one StockExitDocumentLineDetail.
     * @example
     * // Update one StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitDocumentLineDetailUpdateArgs>(args: SelectSubset<T, StockExitDocumentLineDetailUpdateArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StockExitDocumentLineDetails.
     * @param {StockExitDocumentLineDetailDeleteManyArgs} args - Arguments to filter StockExitDocumentLineDetails to delete.
     * @example
     * // Delete a few StockExitDocumentLineDetails
     * const { count } = await prisma.stockExitDocumentLineDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDocumentLineDetailDeleteManyArgs>(args?: SelectSubset<T, StockExitDocumentLineDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExitDocumentLineDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExitDocumentLineDetails
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitDocumentLineDetailUpdateManyArgs>(args: SelectSubset<T, StockExitDocumentLineDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StockExitDocumentLineDetail.
     * @param {StockExitDocumentLineDetailUpsertArgs} args - Arguments to update or create a StockExitDocumentLineDetail.
     * @example
     * // Update or create a StockExitDocumentLineDetail
     * const stockExitDocumentLineDetail = await prisma.stockExitDocumentLineDetail.upsert({
     *   create: {
     *     // ... data to create a StockExitDocumentLineDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExitDocumentLineDetail we want to update
     *   }
     * })
     */
    upsert<T extends StockExitDocumentLineDetailUpsertArgs>(args: SelectSubset<T, StockExitDocumentLineDetailUpsertArgs<ExtArgs>>): Prisma__StockExitDocumentLineDetailClient<$Result.GetResult<Prisma.$StockExitDocumentLineDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StockExitDocumentLineDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailCountArgs} args - Arguments to filter StockExitDocumentLineDetails to count.
     * @example
     * // Count the number of StockExitDocumentLineDetails
     * const count = await prisma.stockExitDocumentLineDetail.count({
     *   where: {
     *     // ... the filter for the StockExitDocumentLineDetails we want to count
     *   }
     * })
    **/
    count<T extends StockExitDocumentLineDetailCountArgs>(
      args?: Subset<T, StockExitDocumentLineDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitDocumentLineDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExitDocumentLineDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StockExitDocumentLineDetailAggregateArgs>(args: Subset<T, StockExitDocumentLineDetailAggregateArgs>): Prisma.PrismaPromise<GetStockExitDocumentLineDetailAggregateType<T>>

    /**
     * Group by StockExitDocumentLineDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitDocumentLineDetailGroupByArgs} args - Group by arguments.
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
      T extends StockExitDocumentLineDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitDocumentLineDetailGroupByArgs['orderBy'] }
        : { orderBy?: StockExitDocumentLineDetailGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StockExitDocumentLineDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitDocumentLineDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExitDocumentLineDetail model
   */
  readonly fields: StockExitDocumentLineDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExitDocumentLineDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitDocumentLineDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    line<T extends StockExitDocumentLineDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockExitDocumentLineDefaultArgs<ExtArgs>>): Prisma__StockExitDocumentLineClient<$Result.GetResult<Prisma.$StockExitDocumentLinePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    entry<T extends StockEntryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StockEntryDefaultArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the StockExitDocumentLineDetail model
   */ 
  interface StockExitDocumentLineDetailFieldRefs {
    readonly id: FieldRef<"StockExitDocumentLineDetail", 'Int'>
    readonly lineId: FieldRef<"StockExitDocumentLineDetail", 'Int'>
    readonly entryId: FieldRef<"StockExitDocumentLineDetail", 'Int'>
    readonly quantity: FieldRef<"StockExitDocumentLineDetail", 'Int'>
    readonly unitCost: FieldRef<"StockExitDocumentLineDetail", 'Float'>
    readonly subtotal: FieldRef<"StockExitDocumentLineDetail", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * StockExitDocumentLineDetail findUnique
   */
  export type StockExitDocumentLineDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLineDetail to fetch.
     */
    where: StockExitDocumentLineDetailWhereUniqueInput
  }

  /**
   * StockExitDocumentLineDetail findUniqueOrThrow
   */
  export type StockExitDocumentLineDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLineDetail to fetch.
     */
    where: StockExitDocumentLineDetailWhereUniqueInput
  }

  /**
   * StockExitDocumentLineDetail findFirst
   */
  export type StockExitDocumentLineDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLineDetail to fetch.
     */
    where?: StockExitDocumentLineDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLineDetails to fetch.
     */
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocumentLineDetails.
     */
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLineDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLineDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocumentLineDetails.
     */
    distinct?: StockExitDocumentLineDetailScalarFieldEnum | StockExitDocumentLineDetailScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLineDetail findFirstOrThrow
   */
  export type StockExitDocumentLineDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLineDetail to fetch.
     */
    where?: StockExitDocumentLineDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLineDetails to fetch.
     */
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExitDocumentLineDetails.
     */
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLineDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLineDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExitDocumentLineDetails.
     */
    distinct?: StockExitDocumentLineDetailScalarFieldEnum | StockExitDocumentLineDetailScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLineDetail findMany
   */
  export type StockExitDocumentLineDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter, which StockExitDocumentLineDetails to fetch.
     */
    where?: StockExitDocumentLineDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExitDocumentLineDetails to fetch.
     */
    orderBy?: StockExitDocumentLineDetailOrderByWithRelationInput | StockExitDocumentLineDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExitDocumentLineDetails.
     */
    cursor?: StockExitDocumentLineDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExitDocumentLineDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExitDocumentLineDetails.
     */
    skip?: number
    distinct?: StockExitDocumentLineDetailScalarFieldEnum | StockExitDocumentLineDetailScalarFieldEnum[]
  }

  /**
   * StockExitDocumentLineDetail create
   */
  export type StockExitDocumentLineDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExitDocumentLineDetail.
     */
    data: XOR<StockExitDocumentLineDetailCreateInput, StockExitDocumentLineDetailUncheckedCreateInput>
  }

  /**
   * StockExitDocumentLineDetail createMany
   */
  export type StockExitDocumentLineDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExitDocumentLineDetails.
     */
    data: StockExitDocumentLineDetailCreateManyInput | StockExitDocumentLineDetailCreateManyInput[]
  }

  /**
   * StockExitDocumentLineDetail createManyAndReturn
   */
  export type StockExitDocumentLineDetailCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StockExitDocumentLineDetails.
     */
    data: StockExitDocumentLineDetailCreateManyInput | StockExitDocumentLineDetailCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExitDocumentLineDetail update
   */
  export type StockExitDocumentLineDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExitDocumentLineDetail.
     */
    data: XOR<StockExitDocumentLineDetailUpdateInput, StockExitDocumentLineDetailUncheckedUpdateInput>
    /**
     * Choose, which StockExitDocumentLineDetail to update.
     */
    where: StockExitDocumentLineDetailWhereUniqueInput
  }

  /**
   * StockExitDocumentLineDetail updateMany
   */
  export type StockExitDocumentLineDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExitDocumentLineDetails.
     */
    data: XOR<StockExitDocumentLineDetailUpdateManyMutationInput, StockExitDocumentLineDetailUncheckedUpdateManyInput>
    /**
     * Filter which StockExitDocumentLineDetails to update
     */
    where?: StockExitDocumentLineDetailWhereInput
  }

  /**
   * StockExitDocumentLineDetail upsert
   */
  export type StockExitDocumentLineDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExitDocumentLineDetail to update in case it exists.
     */
    where: StockExitDocumentLineDetailWhereUniqueInput
    /**
     * In case the StockExitDocumentLineDetail found by the `where` argument doesn't exist, create a new StockExitDocumentLineDetail with this data.
     */
    create: XOR<StockExitDocumentLineDetailCreateInput, StockExitDocumentLineDetailUncheckedCreateInput>
    /**
     * In case the StockExitDocumentLineDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitDocumentLineDetailUpdateInput, StockExitDocumentLineDetailUncheckedUpdateInput>
  }

  /**
   * StockExitDocumentLineDetail delete
   */
  export type StockExitDocumentLineDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
    /**
     * Filter which StockExitDocumentLineDetail to delete.
     */
    where: StockExitDocumentLineDetailWhereUniqueInput
  }

  /**
   * StockExitDocumentLineDetail deleteMany
   */
  export type StockExitDocumentLineDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExitDocumentLineDetails to delete
     */
    where?: StockExitDocumentLineDetailWhereInput
  }

  /**
   * StockExitDocumentLineDetail without action
   */
  export type StockExitDocumentLineDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExitDocumentLineDetail
     */
    select?: StockExitDocumentLineDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitDocumentLineDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    quantity: 'quantity',
    categoryId: 'categoryId',
    supplierId: 'supplierId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const MovementScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    type: 'type',
    quantity: 'quantity',
    createdAt: 'createdAt'
  };

  export type MovementScalarFieldEnum = (typeof MovementScalarFieldEnum)[keyof typeof MovementScalarFieldEnum]


  export const StockEntryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    quantity: 'quantity',
    quantityUsed: 'quantityUsed',
    availableQuantity: 'availableQuantity',
    unitCost: 'unitCost',
    entryDate: 'entryDate',
    origin: 'origin',
    reason: 'reason',
    userId: 'userId'
  };

  export type StockEntryScalarFieldEnum = (typeof StockEntryScalarFieldEnum)[keyof typeof StockEntryScalarFieldEnum]


  export const StockExitScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    type: 'type',
    quantity: 'quantity',
    totalCost: 'totalCost',
    exitDate: 'exitDate',
    origin: 'origin',
    reason: 'reason',
    userId: 'userId'
  };

  export type StockExitScalarFieldEnum = (typeof StockExitScalarFieldEnum)[keyof typeof StockExitScalarFieldEnum]


  export const StockExitDetailScalarFieldEnum: {
    id: 'id',
    exitId: 'exitId',
    entryId: 'entryId',
    quantity: 'quantity',
    unitCost: 'unitCost',
    subtotal: 'subtotal'
  };

  export type StockExitDetailScalarFieldEnum = (typeof StockExitDetailScalarFieldEnum)[keyof typeof StockExitDetailScalarFieldEnum]


  export const StockExitDocumentScalarFieldEnum: {
    id: 'id',
    reference: 'reference',
    type: 'type',
    totalCost: 'totalCost',
    documentDate: 'documentDate',
    reason: 'reason',
    userId: 'userId'
  };

  export type StockExitDocumentScalarFieldEnum = (typeof StockExitDocumentScalarFieldEnum)[keyof typeof StockExitDocumentScalarFieldEnum]


  export const StockExitDocumentLineScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    productId: 'productId',
    quantity: 'quantity',
    totalCost: 'totalCost'
  };

  export type StockExitDocumentLineScalarFieldEnum = (typeof StockExitDocumentLineScalarFieldEnum)[keyof typeof StockExitDocumentLineScalarFieldEnum]


  export const StockExitDocumentLineDetailScalarFieldEnum: {
    id: 'id',
    lineId: 'lineId',
    entryId: 'entryId',
    quantity: 'quantity',
    unitCost: 'unitCost',
    subtotal: 'subtotal'
  };

  export type StockExitDocumentLineDetailScalarFieldEnum = (typeof StockExitDocumentLineDetailScalarFieldEnum)[keyof typeof StockExitDocumentLineDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: IntFilter<"Supplier"> | number
    name?: StringFilter<"Supplier"> | string
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    products?: ProductListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _avg?: SupplierAvgOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
    _sum?: SupplierSumOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Supplier"> | number
    name?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    movements?: MovementListRelationFilter
    entries?: StockEntryListRelationFilter
    exits?: StockExitListRelationFilter
    docLines?: StockExitDocumentLineListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    movements?: MovementOrderByRelationAggregateInput
    entries?: StockEntryOrderByRelationAggregateInput
    exits?: StockExitOrderByRelationAggregateInput
    docLines?: StockExitDocumentLineOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
    category?: XOR<CategoryRelationFilter, CategoryWhereInput>
    supplier?: XOR<SupplierRelationFilter, SupplierWhereInput>
    movements?: MovementListRelationFilter
    entries?: StockEntryListRelationFilter
    exits?: StockExitListRelationFilter
    docLines?: StockExitDocumentLineListRelationFilter
  }, "id" | "name">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    price?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    categoryId?: IntWithAggregatesFilter<"Product"> | number
    supplierId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type MovementWhereInput = {
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    id?: IntFilter<"Movement"> | number
    productId?: IntFilter<"Movement"> | number
    type?: StringFilter<"Movement"> | string
    quantity?: IntFilter<"Movement"> | number
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }

  export type MovementOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type MovementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MovementWhereInput | MovementWhereInput[]
    OR?: MovementWhereInput[]
    NOT?: MovementWhereInput | MovementWhereInput[]
    productId?: IntFilter<"Movement"> | number
    type?: StringFilter<"Movement"> | string
    quantity?: IntFilter<"Movement"> | number
    createdAt?: DateTimeFilter<"Movement"> | Date | string
    product?: XOR<ProductRelationFilter, ProductWhereInput>
  }, "id">

  export type MovementOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
    _count?: MovementCountOrderByAggregateInput
    _avg?: MovementAvgOrderByAggregateInput
    _max?: MovementMaxOrderByAggregateInput
    _min?: MovementMinOrderByAggregateInput
    _sum?: MovementSumOrderByAggregateInput
  }

  export type MovementScalarWhereWithAggregatesInput = {
    AND?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    OR?: MovementScalarWhereWithAggregatesInput[]
    NOT?: MovementScalarWhereWithAggregatesInput | MovementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Movement"> | number
    productId?: IntWithAggregatesFilter<"Movement"> | number
    type?: StringWithAggregatesFilter<"Movement"> | string
    quantity?: IntWithAggregatesFilter<"Movement"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Movement"> | Date | string
  }

  export type StockEntryWhereInput = {
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    id?: IntFilter<"StockEntry"> | number
    productId?: IntFilter<"StockEntry"> | number
    quantity?: IntFilter<"StockEntry"> | number
    quantityUsed?: IntFilter<"StockEntry"> | number
    availableQuantity?: IntFilter<"StockEntry"> | number
    unitCost?: FloatFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    origin?: StringNullableFilter<"StockEntry"> | string | null
    reason?: StringNullableFilter<"StockEntry"> | string | null
    userId?: StringNullableFilter<"StockEntry"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    exitDetails?: StockExitDetailListRelationFilter
    docLineDetails?: StockExitDocumentLineDetailListRelationFilter
  }

  export type StockEntryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
    entryDate?: SortOrder
    origin?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    exitDetails?: StockExitDetailOrderByRelationAggregateInput
    docLineDetails?: StockExitDocumentLineDetailOrderByRelationAggregateInput
  }

  export type StockEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    productId?: IntFilter<"StockEntry"> | number
    quantity?: IntFilter<"StockEntry"> | number
    quantityUsed?: IntFilter<"StockEntry"> | number
    availableQuantity?: IntFilter<"StockEntry"> | number
    unitCost?: FloatFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    origin?: StringNullableFilter<"StockEntry"> | string | null
    reason?: StringNullableFilter<"StockEntry"> | string | null
    userId?: StringNullableFilter<"StockEntry"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    exitDetails?: StockExitDetailListRelationFilter
    docLineDetails?: StockExitDocumentLineDetailListRelationFilter
  }, "id">

  export type StockEntryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
    entryDate?: SortOrder
    origin?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: StockEntryCountOrderByAggregateInput
    _avg?: StockEntryAvgOrderByAggregateInput
    _max?: StockEntryMaxOrderByAggregateInput
    _min?: StockEntryMinOrderByAggregateInput
    _sum?: StockEntrySumOrderByAggregateInput
  }

  export type StockEntryScalarWhereWithAggregatesInput = {
    AND?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    OR?: StockEntryScalarWhereWithAggregatesInput[]
    NOT?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockEntry"> | number
    productId?: IntWithAggregatesFilter<"StockEntry"> | number
    quantity?: IntWithAggregatesFilter<"StockEntry"> | number
    quantityUsed?: IntWithAggregatesFilter<"StockEntry"> | number
    availableQuantity?: IntWithAggregatesFilter<"StockEntry"> | number
    unitCost?: FloatWithAggregatesFilter<"StockEntry"> | number
    entryDate?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    origin?: StringNullableWithAggregatesFilter<"StockEntry"> | string | null
    reason?: StringNullableWithAggregatesFilter<"StockEntry"> | string | null
    userId?: StringNullableWithAggregatesFilter<"StockEntry"> | string | null
  }

  export type StockExitWhereInput = {
    AND?: StockExitWhereInput | StockExitWhereInput[]
    OR?: StockExitWhereInput[]
    NOT?: StockExitWhereInput | StockExitWhereInput[]
    id?: IntFilter<"StockExit"> | number
    productId?: IntFilter<"StockExit"> | number
    type?: StringFilter<"StockExit"> | string
    quantity?: IntFilter<"StockExit"> | number
    totalCost?: FloatFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    origin?: StringNullableFilter<"StockExit"> | string | null
    reason?: StringNullableFilter<"StockExit"> | string | null
    userId?: StringNullableFilter<"StockExit"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    details?: StockExitDetailListRelationFilter
  }

  export type StockExitOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    exitDate?: SortOrder
    origin?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    details?: StockExitDetailOrderByRelationAggregateInput
  }

  export type StockExitWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockExitWhereInput | StockExitWhereInput[]
    OR?: StockExitWhereInput[]
    NOT?: StockExitWhereInput | StockExitWhereInput[]
    productId?: IntFilter<"StockExit"> | number
    type?: StringFilter<"StockExit"> | string
    quantity?: IntFilter<"StockExit"> | number
    totalCost?: FloatFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    origin?: StringNullableFilter<"StockExit"> | string | null
    reason?: StringNullableFilter<"StockExit"> | string | null
    userId?: StringNullableFilter<"StockExit"> | string | null
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    details?: StockExitDetailListRelationFilter
  }, "id">

  export type StockExitOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    exitDate?: SortOrder
    origin?: SortOrderInput | SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: StockExitCountOrderByAggregateInput
    _avg?: StockExitAvgOrderByAggregateInput
    _max?: StockExitMaxOrderByAggregateInput
    _min?: StockExitMinOrderByAggregateInput
    _sum?: StockExitSumOrderByAggregateInput
  }

  export type StockExitScalarWhereWithAggregatesInput = {
    AND?: StockExitScalarWhereWithAggregatesInput | StockExitScalarWhereWithAggregatesInput[]
    OR?: StockExitScalarWhereWithAggregatesInput[]
    NOT?: StockExitScalarWhereWithAggregatesInput | StockExitScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockExit"> | number
    productId?: IntWithAggregatesFilter<"StockExit"> | number
    type?: StringWithAggregatesFilter<"StockExit"> | string
    quantity?: IntWithAggregatesFilter<"StockExit"> | number
    totalCost?: FloatWithAggregatesFilter<"StockExit"> | number
    exitDate?: DateTimeWithAggregatesFilter<"StockExit"> | Date | string
    origin?: StringNullableWithAggregatesFilter<"StockExit"> | string | null
    reason?: StringNullableWithAggregatesFilter<"StockExit"> | string | null
    userId?: StringNullableWithAggregatesFilter<"StockExit"> | string | null
  }

  export type StockExitDetailWhereInput = {
    AND?: StockExitDetailWhereInput | StockExitDetailWhereInput[]
    OR?: StockExitDetailWhereInput[]
    NOT?: StockExitDetailWhereInput | StockExitDetailWhereInput[]
    id?: IntFilter<"StockExitDetail"> | number
    exitId?: IntFilter<"StockExitDetail"> | number
    entryId?: IntFilter<"StockExitDetail"> | number
    quantity?: IntFilter<"StockExitDetail"> | number
    unitCost?: FloatFilter<"StockExitDetail"> | number
    subtotal?: FloatFilter<"StockExitDetail"> | number
    exit?: XOR<StockExitRelationFilter, StockExitWhereInput>
    entry?: XOR<StockEntryRelationFilter, StockEntryWhereInput>
  }

  export type StockExitDetailOrderByWithRelationInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
    exit?: StockExitOrderByWithRelationInput
    entry?: StockEntryOrderByWithRelationInput
  }

  export type StockExitDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockExitDetailWhereInput | StockExitDetailWhereInput[]
    OR?: StockExitDetailWhereInput[]
    NOT?: StockExitDetailWhereInput | StockExitDetailWhereInput[]
    exitId?: IntFilter<"StockExitDetail"> | number
    entryId?: IntFilter<"StockExitDetail"> | number
    quantity?: IntFilter<"StockExitDetail"> | number
    unitCost?: FloatFilter<"StockExitDetail"> | number
    subtotal?: FloatFilter<"StockExitDetail"> | number
    exit?: XOR<StockExitRelationFilter, StockExitWhereInput>
    entry?: XOR<StockEntryRelationFilter, StockEntryWhereInput>
  }, "id">

  export type StockExitDetailOrderByWithAggregationInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
    _count?: StockExitDetailCountOrderByAggregateInput
    _avg?: StockExitDetailAvgOrderByAggregateInput
    _max?: StockExitDetailMaxOrderByAggregateInput
    _min?: StockExitDetailMinOrderByAggregateInput
    _sum?: StockExitDetailSumOrderByAggregateInput
  }

  export type StockExitDetailScalarWhereWithAggregatesInput = {
    AND?: StockExitDetailScalarWhereWithAggregatesInput | StockExitDetailScalarWhereWithAggregatesInput[]
    OR?: StockExitDetailScalarWhereWithAggregatesInput[]
    NOT?: StockExitDetailScalarWhereWithAggregatesInput | StockExitDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockExitDetail"> | number
    exitId?: IntWithAggregatesFilter<"StockExitDetail"> | number
    entryId?: IntWithAggregatesFilter<"StockExitDetail"> | number
    quantity?: IntWithAggregatesFilter<"StockExitDetail"> | number
    unitCost?: FloatWithAggregatesFilter<"StockExitDetail"> | number
    subtotal?: FloatWithAggregatesFilter<"StockExitDetail"> | number
  }

  export type StockExitDocumentWhereInput = {
    AND?: StockExitDocumentWhereInput | StockExitDocumentWhereInput[]
    OR?: StockExitDocumentWhereInput[]
    NOT?: StockExitDocumentWhereInput | StockExitDocumentWhereInput[]
    id?: IntFilter<"StockExitDocument"> | number
    reference?: StringFilter<"StockExitDocument"> | string
    type?: StringFilter<"StockExitDocument"> | string
    totalCost?: FloatFilter<"StockExitDocument"> | number
    documentDate?: DateTimeFilter<"StockExitDocument"> | Date | string
    reason?: StringNullableFilter<"StockExitDocument"> | string | null
    userId?: StringNullableFilter<"StockExitDocument"> | string | null
    lines?: StockExitDocumentLineListRelationFilter
  }

  export type StockExitDocumentOrderByWithRelationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    totalCost?: SortOrder
    documentDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    lines?: StockExitDocumentLineOrderByRelationAggregateInput
  }

  export type StockExitDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    reference?: string
    AND?: StockExitDocumentWhereInput | StockExitDocumentWhereInput[]
    OR?: StockExitDocumentWhereInput[]
    NOT?: StockExitDocumentWhereInput | StockExitDocumentWhereInput[]
    type?: StringFilter<"StockExitDocument"> | string
    totalCost?: FloatFilter<"StockExitDocument"> | number
    documentDate?: DateTimeFilter<"StockExitDocument"> | Date | string
    reason?: StringNullableFilter<"StockExitDocument"> | string | null
    userId?: StringNullableFilter<"StockExitDocument"> | string | null
    lines?: StockExitDocumentLineListRelationFilter
  }, "id" | "reference">

  export type StockExitDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    totalCost?: SortOrder
    documentDate?: SortOrder
    reason?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: StockExitDocumentCountOrderByAggregateInput
    _avg?: StockExitDocumentAvgOrderByAggregateInput
    _max?: StockExitDocumentMaxOrderByAggregateInput
    _min?: StockExitDocumentMinOrderByAggregateInput
    _sum?: StockExitDocumentSumOrderByAggregateInput
  }

  export type StockExitDocumentScalarWhereWithAggregatesInput = {
    AND?: StockExitDocumentScalarWhereWithAggregatesInput | StockExitDocumentScalarWhereWithAggregatesInput[]
    OR?: StockExitDocumentScalarWhereWithAggregatesInput[]
    NOT?: StockExitDocumentScalarWhereWithAggregatesInput | StockExitDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockExitDocument"> | number
    reference?: StringWithAggregatesFilter<"StockExitDocument"> | string
    type?: StringWithAggregatesFilter<"StockExitDocument"> | string
    totalCost?: FloatWithAggregatesFilter<"StockExitDocument"> | number
    documentDate?: DateTimeWithAggregatesFilter<"StockExitDocument"> | Date | string
    reason?: StringNullableWithAggregatesFilter<"StockExitDocument"> | string | null
    userId?: StringNullableWithAggregatesFilter<"StockExitDocument"> | string | null
  }

  export type StockExitDocumentLineWhereInput = {
    AND?: StockExitDocumentLineWhereInput | StockExitDocumentLineWhereInput[]
    OR?: StockExitDocumentLineWhereInput[]
    NOT?: StockExitDocumentLineWhereInput | StockExitDocumentLineWhereInput[]
    id?: IntFilter<"StockExitDocumentLine"> | number
    documentId?: IntFilter<"StockExitDocumentLine"> | number
    productId?: IntFilter<"StockExitDocumentLine"> | number
    quantity?: IntFilter<"StockExitDocumentLine"> | number
    totalCost?: FloatFilter<"StockExitDocumentLine"> | number
    document?: XOR<StockExitDocumentRelationFilter, StockExitDocumentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    details?: StockExitDocumentLineDetailListRelationFilter
  }

  export type StockExitDocumentLineOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    document?: StockExitDocumentOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
    details?: StockExitDocumentLineDetailOrderByRelationAggregateInput
  }

  export type StockExitDocumentLineWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockExitDocumentLineWhereInput | StockExitDocumentLineWhereInput[]
    OR?: StockExitDocumentLineWhereInput[]
    NOT?: StockExitDocumentLineWhereInput | StockExitDocumentLineWhereInput[]
    documentId?: IntFilter<"StockExitDocumentLine"> | number
    productId?: IntFilter<"StockExitDocumentLine"> | number
    quantity?: IntFilter<"StockExitDocumentLine"> | number
    totalCost?: FloatFilter<"StockExitDocumentLine"> | number
    document?: XOR<StockExitDocumentRelationFilter, StockExitDocumentWhereInput>
    product?: XOR<ProductRelationFilter, ProductWhereInput>
    details?: StockExitDocumentLineDetailListRelationFilter
  }, "id">

  export type StockExitDocumentLineOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    _count?: StockExitDocumentLineCountOrderByAggregateInput
    _avg?: StockExitDocumentLineAvgOrderByAggregateInput
    _max?: StockExitDocumentLineMaxOrderByAggregateInput
    _min?: StockExitDocumentLineMinOrderByAggregateInput
    _sum?: StockExitDocumentLineSumOrderByAggregateInput
  }

  export type StockExitDocumentLineScalarWhereWithAggregatesInput = {
    AND?: StockExitDocumentLineScalarWhereWithAggregatesInput | StockExitDocumentLineScalarWhereWithAggregatesInput[]
    OR?: StockExitDocumentLineScalarWhereWithAggregatesInput[]
    NOT?: StockExitDocumentLineScalarWhereWithAggregatesInput | StockExitDocumentLineScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockExitDocumentLine"> | number
    documentId?: IntWithAggregatesFilter<"StockExitDocumentLine"> | number
    productId?: IntWithAggregatesFilter<"StockExitDocumentLine"> | number
    quantity?: IntWithAggregatesFilter<"StockExitDocumentLine"> | number
    totalCost?: FloatWithAggregatesFilter<"StockExitDocumentLine"> | number
  }

  export type StockExitDocumentLineDetailWhereInput = {
    AND?: StockExitDocumentLineDetailWhereInput | StockExitDocumentLineDetailWhereInput[]
    OR?: StockExitDocumentLineDetailWhereInput[]
    NOT?: StockExitDocumentLineDetailWhereInput | StockExitDocumentLineDetailWhereInput[]
    id?: IntFilter<"StockExitDocumentLineDetail"> | number
    lineId?: IntFilter<"StockExitDocumentLineDetail"> | number
    entryId?: IntFilter<"StockExitDocumentLineDetail"> | number
    quantity?: IntFilter<"StockExitDocumentLineDetail"> | number
    unitCost?: FloatFilter<"StockExitDocumentLineDetail"> | number
    subtotal?: FloatFilter<"StockExitDocumentLineDetail"> | number
    line?: XOR<StockExitDocumentLineRelationFilter, StockExitDocumentLineWhereInput>
    entry?: XOR<StockEntryRelationFilter, StockEntryWhereInput>
  }

  export type StockExitDocumentLineDetailOrderByWithRelationInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
    line?: StockExitDocumentLineOrderByWithRelationInput
    entry?: StockEntryOrderByWithRelationInput
  }

  export type StockExitDocumentLineDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: StockExitDocumentLineDetailWhereInput | StockExitDocumentLineDetailWhereInput[]
    OR?: StockExitDocumentLineDetailWhereInput[]
    NOT?: StockExitDocumentLineDetailWhereInput | StockExitDocumentLineDetailWhereInput[]
    lineId?: IntFilter<"StockExitDocumentLineDetail"> | number
    entryId?: IntFilter<"StockExitDocumentLineDetail"> | number
    quantity?: IntFilter<"StockExitDocumentLineDetail"> | number
    unitCost?: FloatFilter<"StockExitDocumentLineDetail"> | number
    subtotal?: FloatFilter<"StockExitDocumentLineDetail"> | number
    line?: XOR<StockExitDocumentLineRelationFilter, StockExitDocumentLineWhereInput>
    entry?: XOR<StockEntryRelationFilter, StockEntryWhereInput>
  }, "id">

  export type StockExitDocumentLineDetailOrderByWithAggregationInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
    _count?: StockExitDocumentLineDetailCountOrderByAggregateInput
    _avg?: StockExitDocumentLineDetailAvgOrderByAggregateInput
    _max?: StockExitDocumentLineDetailMaxOrderByAggregateInput
    _min?: StockExitDocumentLineDetailMinOrderByAggregateInput
    _sum?: StockExitDocumentLineDetailSumOrderByAggregateInput
  }

  export type StockExitDocumentLineDetailScalarWhereWithAggregatesInput = {
    AND?: StockExitDocumentLineDetailScalarWhereWithAggregatesInput | StockExitDocumentLineDetailScalarWhereWithAggregatesInput[]
    OR?: StockExitDocumentLineDetailScalarWhereWithAggregatesInput[]
    NOT?: StockExitDocumentLineDetailScalarWhereWithAggregatesInput | StockExitDocumentLineDetailScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
    lineId?: IntWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
    entryId?: IntWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
    quantity?: IntWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
    unitCost?: FloatWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
    subtotal?: FloatWithAggregatesFilter<"StockExitDocumentLineDetail"> | number
  }

  export type CategoryCreateInput = {
    name: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierCreateInput = {
    name: string
    email?: string | null
    phone?: string | null
    products?: ProductCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
    products?: ProductUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    products?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
  }

  export type SupplierUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductCreateInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    supplier: SupplierCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type MovementCreateInput = {
    type: string
    quantity: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutMovementsInput
  }

  export type MovementUncheckedCreateInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    createdAt?: Date | string
  }

  export type MovementUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutMovementsNestedInput
  }

  export type MovementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementCreateManyInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    createdAt?: Date | string
  }

  export type MovementUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryCreateInput = {
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    product: ProductCreateNestedOneWithoutEntriesInput
    exitDetails?: StockExitDetailCreateNestedManyWithoutEntryInput
    docLineDetails?: StockExitDocumentLineDetailCreateNestedManyWithoutEntryInput
  }

  export type StockEntryUncheckedCreateInput = {
    id?: number
    productId: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    exitDetails?: StockExitDetailUncheckedCreateNestedManyWithoutEntryInput
    docLineDetails?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutEntryInput
  }

  export type StockEntryUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutEntriesNestedInput
    exitDetails?: StockExitDetailUpdateManyWithoutEntryNestedInput
    docLineDetails?: StockExitDocumentLineDetailUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    exitDetails?: StockExitDetailUncheckedUpdateManyWithoutEntryNestedInput
    docLineDetails?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryCreateManyInput = {
    id?: number
    productId: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
  }

  export type StockEntryUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockEntryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitCreateInput = {
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    product: ProductCreateNestedOneWithoutExitsInput
    details?: StockExitDetailCreateNestedManyWithoutExitInput
  }

  export type StockExitUncheckedCreateInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    details?: StockExitDetailUncheckedCreateNestedManyWithoutExitInput
  }

  export type StockExitUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutExitsNestedInput
    details?: StockExitDetailUpdateManyWithoutExitNestedInput
  }

  export type StockExitUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: StockExitDetailUncheckedUpdateManyWithoutExitNestedInput
  }

  export type StockExitCreateManyInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
  }

  export type StockExitUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitDetailCreateInput = {
    quantity: number
    unitCost: number
    subtotal: number
    exit: StockExitCreateNestedOneWithoutDetailsInput
    entry: StockEntryCreateNestedOneWithoutExitDetailsInput
  }

  export type StockExitDetailUncheckedCreateInput = {
    id?: number
    exitId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    exit?: StockExitUpdateOneRequiredWithoutDetailsNestedInput
    entry?: StockEntryUpdateOneRequiredWithoutExitDetailsNestedInput
  }

  export type StockExitDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    exitId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailCreateManyInput = {
    id?: number
    exitId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    exitId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentCreateInput = {
    reference: string
    type: string
    totalCost?: number
    documentDate?: Date | string
    reason?: string | null
    userId?: string | null
    lines?: StockExitDocumentLineCreateNestedManyWithoutDocumentInput
  }

  export type StockExitDocumentUncheckedCreateInput = {
    id?: number
    reference: string
    type: string
    totalCost?: number
    documentDate?: Date | string
    reason?: string | null
    userId?: string | null
    lines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type StockExitDocumentUpdateInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    lines?: StockExitDocumentLineUpdateManyWithoutDocumentNestedInput
  }

  export type StockExitDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    lines?: StockExitDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type StockExitDocumentCreateManyInput = {
    id?: number
    reference: string
    type: string
    totalCost?: number
    documentDate?: Date | string
    reason?: string | null
    userId?: string | null
  }

  export type StockExitDocumentUpdateManyMutationInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitDocumentLineCreateInput = {
    quantity: number
    totalCost?: number
    document: StockExitDocumentCreateNestedOneWithoutLinesInput
    product: ProductCreateNestedOneWithoutDocLinesInput
    details?: StockExitDocumentLineDetailCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineUncheckedCreateInput = {
    id?: number
    documentId: number
    productId: number
    quantity: number
    totalCost?: number
    details?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    document?: StockExitDocumentUpdateOneRequiredWithoutLinesNestedInput
    product?: ProductUpdateOneRequiredWithoutDocLinesNestedInput
    details?: StockExitDocumentLineDetailUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    details?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineCreateManyInput = {
    id?: number
    documentId: number
    productId: number
    quantity: number
    totalCost?: number
  }

  export type StockExitDocumentLineUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailCreateInput = {
    quantity: number
    unitCost: number
    subtotal: number
    line: StockExitDocumentLineCreateNestedOneWithoutDetailsInput
    entry: StockEntryCreateNestedOneWithoutDocLineDetailsInput
  }

  export type StockExitDocumentLineDetailUncheckedCreateInput = {
    id?: number
    lineId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    line?: StockExitDocumentLineUpdateOneRequiredWithoutDetailsNestedInput
    entry?: StockEntryUpdateOneRequiredWithoutDocLineDetailsNestedInput
  }

  export type StockExitDocumentLineDetailUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailCreateManyInput = {
    id?: number
    lineId: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SupplierAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
  }

  export type SupplierSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CategoryRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type SupplierRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type MovementListRelationFilter = {
    every?: MovementWhereInput
    some?: MovementWhereInput
    none?: MovementWhereInput
  }

  export type StockEntryListRelationFilter = {
    every?: StockEntryWhereInput
    some?: StockEntryWhereInput
    none?: StockEntryWhereInput
  }

  export type StockExitListRelationFilter = {
    every?: StockExitWhereInput
    some?: StockExitWhereInput
    none?: StockExitWhereInput
  }

  export type StockExitDocumentLineListRelationFilter = {
    every?: StockExitDocumentLineWhereInput
    some?: StockExitDocumentLineWhereInput
    none?: StockExitDocumentLineWhereInput
  }

  export type MovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockExitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockExitDocumentLineOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    categoryId?: SortOrder
    supplierId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type MovementCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type MovementMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    createdAt?: SortOrder
  }

  export type MovementSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StockExitDetailListRelationFilter = {
    every?: StockExitDetailWhereInput
    some?: StockExitDetailWhereInput
    none?: StockExitDetailWhereInput
  }

  export type StockExitDocumentLineDetailListRelationFilter = {
    every?: StockExitDocumentLineDetailWhereInput
    some?: StockExitDocumentLineDetailWhereInput
    none?: StockExitDocumentLineDetailWhereInput
  }

  export type StockExitDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockExitDocumentLineDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockEntryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
    entryDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockEntryAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
  }

  export type StockEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
    entryDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockEntryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
    entryDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockEntrySumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    quantityUsed?: SortOrder
    availableQuantity?: SortOrder
    unitCost?: SortOrder
  }

  export type StockExitCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    exitDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    exitDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
    exitDate?: SortOrder
    origin?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitRelationFilter = {
    is?: StockExitWhereInput
    isNot?: StockExitWhereInput
  }

  export type StockEntryRelationFilter = {
    is?: StockEntryWhereInput
    isNot?: StockEntryWhereInput
  }

  export type StockExitDetailCountOrderByAggregateInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDetailMinOrderByAggregateInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDetailSumOrderByAggregateInput = {
    id?: SortOrder
    exitId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    totalCost?: SortOrder
    documentDate?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    totalCost?: SortOrder
    documentDate?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    reference?: SortOrder
    type?: SortOrder
    totalCost?: SortOrder
    documentDate?: SortOrder
    reason?: SortOrder
    userId?: SortOrder
  }

  export type StockExitDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentRelationFilter = {
    is?: StockExitDocumentWhereInput
    isNot?: StockExitDocumentWhereInput
  }

  export type StockExitDocumentLineCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentLineAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentLineMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentLineMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentLineSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    totalCost?: SortOrder
  }

  export type StockExitDocumentLineRelationFilter = {
    is?: StockExitDocumentLineWhereInput
    isNot?: StockExitDocumentLineWhereInput
  }

  export type StockExitDocumentLineDetailCountOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDocumentLineDetailAvgOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDocumentLineDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDocumentLineDetailMinOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type StockExitDocumentLineDetailSumOrderByAggregateInput = {
    id?: SortOrder
    lineId?: SortOrder
    entryId?: SortOrder
    quantity?: SortOrder
    unitCost?: SortOrder
    subtotal?: SortOrder
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutProductsInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    connect?: SupplierWhereUniqueInput
  }

  export type MovementCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput> | MovementCreateWithoutProductInput[] | MovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutProductInput | MovementCreateOrConnectWithoutProductInput[]
    createMany?: MovementCreateManyProductInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type StockEntryCreateNestedManyWithoutProductInput = {
    create?: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput> | StockEntryCreateWithoutProductInput[] | StockEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutProductInput | StockEntryCreateOrConnectWithoutProductInput[]
    createMany?: StockEntryCreateManyProductInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockExitCreateNestedManyWithoutProductInput = {
    create?: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput> | StockExitCreateWithoutProductInput[] | StockExitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutProductInput | StockExitCreateOrConnectWithoutProductInput[]
    createMany?: StockExitCreateManyProductInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type StockExitDocumentLineCreateNestedManyWithoutProductInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput> | StockExitDocumentLineCreateWithoutProductInput[] | StockExitDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutProductInput | StockExitDocumentLineCreateOrConnectWithoutProductInput[]
    createMany?: StockExitDocumentLineCreateManyProductInputEnvelope
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
  }

  export type MovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput> | MovementCreateWithoutProductInput[] | MovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutProductInput | MovementCreateOrConnectWithoutProductInput[]
    createMany?: MovementCreateManyProductInputEnvelope
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
  }

  export type StockEntryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput> | StockEntryCreateWithoutProductInput[] | StockEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutProductInput | StockEntryCreateOrConnectWithoutProductInput[]
    createMany?: StockEntryCreateManyProductInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockExitUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput> | StockExitCreateWithoutProductInput[] | StockExitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutProductInput | StockExitCreateOrConnectWithoutProductInput[]
    createMany?: StockExitCreateManyProductInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput> | StockExitDocumentLineCreateWithoutProductInput[] | StockExitDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutProductInput | StockExitDocumentLineCreateOrConnectWithoutProductInput[]
    createMany?: StockExitDocumentLineCreateManyProductInputEnvelope
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    upsert?: SupplierUpsertWithoutProductsInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProductsInput, SupplierUpdateWithoutProductsInput>, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type MovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput> | MovementCreateWithoutProductInput[] | MovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutProductInput | MovementCreateOrConnectWithoutProductInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutProductInput | MovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementCreateManyProductInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutProductInput | MovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutProductInput | MovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type StockEntryUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput> | StockEntryCreateWithoutProductInput[] | StockEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutProductInput | StockEntryCreateOrConnectWithoutProductInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutProductInput | StockEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockEntryCreateManyProductInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutProductInput | StockEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutProductInput | StockEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StockExitUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput> | StockExitCreateWithoutProductInput[] | StockExitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutProductInput | StockExitCreateOrConnectWithoutProductInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutProductInput | StockExitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockExitCreateManyProductInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutProductInput | StockExitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutProductInput | StockExitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type StockExitDocumentLineUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput> | StockExitDocumentLineCreateWithoutProductInput[] | StockExitDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutProductInput | StockExitDocumentLineCreateOrConnectWithoutProductInput[]
    upsert?: StockExitDocumentLineUpsertWithWhereUniqueWithoutProductInput | StockExitDocumentLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockExitDocumentLineCreateManyProductInputEnvelope
    set?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    disconnect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    delete?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    update?: StockExitDocumentLineUpdateWithWhereUniqueWithoutProductInput | StockExitDocumentLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockExitDocumentLineUpdateManyWithWhereWithoutProductInput | StockExitDocumentLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
  }

  export type MovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput> | MovementCreateWithoutProductInput[] | MovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: MovementCreateOrConnectWithoutProductInput | MovementCreateOrConnectWithoutProductInput[]
    upsert?: MovementUpsertWithWhereUniqueWithoutProductInput | MovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: MovementCreateManyProductInputEnvelope
    set?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    disconnect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    delete?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    connect?: MovementWhereUniqueInput | MovementWhereUniqueInput[]
    update?: MovementUpdateWithWhereUniqueWithoutProductInput | MovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: MovementUpdateManyWithWhereWithoutProductInput | MovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: MovementScalarWhereInput | MovementScalarWhereInput[]
  }

  export type StockEntryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput> | StockEntryCreateWithoutProductInput[] | StockEntryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutProductInput | StockEntryCreateOrConnectWithoutProductInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutProductInput | StockEntryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockEntryCreateManyProductInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutProductInput | StockEntryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutProductInput | StockEntryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StockExitUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput> | StockExitCreateWithoutProductInput[] | StockExitUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutProductInput | StockExitCreateOrConnectWithoutProductInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutProductInput | StockExitUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockExitCreateManyProductInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutProductInput | StockExitUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutProductInput | StockExitUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput> | StockExitDocumentLineCreateWithoutProductInput[] | StockExitDocumentLineUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutProductInput | StockExitDocumentLineCreateOrConnectWithoutProductInput[]
    upsert?: StockExitDocumentLineUpsertWithWhereUniqueWithoutProductInput | StockExitDocumentLineUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockExitDocumentLineCreateManyProductInputEnvelope
    set?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    disconnect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    delete?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    update?: StockExitDocumentLineUpdateWithWhereUniqueWithoutProductInput | StockExitDocumentLineUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockExitDocumentLineUpdateManyWithWhereWithoutProductInput | StockExitDocumentLineUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutMovementsInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateOneRequiredWithoutMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutMovementsInput
    upsert?: ProductUpsertWithoutMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutMovementsInput, ProductUpdateWithoutMovementsInput>, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type ProductCreateNestedOneWithoutEntriesInput = {
    create?: XOR<ProductCreateWithoutEntriesInput, ProductUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutEntriesInput
    connect?: ProductWhereUniqueInput
  }

  export type StockExitDetailCreateNestedManyWithoutEntryInput = {
    create?: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput> | StockExitDetailCreateWithoutEntryInput[] | StockExitDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutEntryInput | StockExitDetailCreateOrConnectWithoutEntryInput[]
    createMany?: StockExitDetailCreateManyEntryInputEnvelope
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
  }

  export type StockExitDocumentLineDetailCreateNestedManyWithoutEntryInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput> | StockExitDocumentLineDetailCreateWithoutEntryInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput | StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput[]
    createMany?: StockExitDocumentLineDetailCreateManyEntryInputEnvelope
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
  }

  export type StockExitDetailUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput> | StockExitDetailCreateWithoutEntryInput[] | StockExitDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutEntryInput | StockExitDetailCreateOrConnectWithoutEntryInput[]
    createMany?: StockExitDetailCreateManyEntryInputEnvelope
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
  }

  export type StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutEntryInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput> | StockExitDocumentLineDetailCreateWithoutEntryInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput | StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput[]
    createMany?: StockExitDocumentLineDetailCreateManyEntryInputEnvelope
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutEntriesNestedInput = {
    create?: XOR<ProductCreateWithoutEntriesInput, ProductUncheckedCreateWithoutEntriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutEntriesInput
    upsert?: ProductUpsertWithoutEntriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutEntriesInput, ProductUpdateWithoutEntriesInput>, ProductUncheckedUpdateWithoutEntriesInput>
  }

  export type StockExitDetailUpdateManyWithoutEntryNestedInput = {
    create?: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput> | StockExitDetailCreateWithoutEntryInput[] | StockExitDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutEntryInput | StockExitDetailCreateOrConnectWithoutEntryInput[]
    upsert?: StockExitDetailUpsertWithWhereUniqueWithoutEntryInput | StockExitDetailUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: StockExitDetailCreateManyEntryInputEnvelope
    set?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    disconnect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    delete?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    update?: StockExitDetailUpdateWithWhereUniqueWithoutEntryInput | StockExitDetailUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: StockExitDetailUpdateManyWithWhereWithoutEntryInput | StockExitDetailUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
  }

  export type StockExitDocumentLineDetailUpdateManyWithoutEntryNestedInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput> | StockExitDocumentLineDetailCreateWithoutEntryInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput | StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput[]
    upsert?: StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutEntryInput | StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: StockExitDocumentLineDetailCreateManyEntryInputEnvelope
    set?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    disconnect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    delete?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    update?: StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutEntryInput | StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: StockExitDocumentLineDetailUpdateManyWithWhereWithoutEntryInput | StockExitDocumentLineDetailUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
  }

  export type StockExitDetailUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput> | StockExitDetailCreateWithoutEntryInput[] | StockExitDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutEntryInput | StockExitDetailCreateOrConnectWithoutEntryInput[]
    upsert?: StockExitDetailUpsertWithWhereUniqueWithoutEntryInput | StockExitDetailUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: StockExitDetailCreateManyEntryInputEnvelope
    set?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    disconnect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    delete?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    update?: StockExitDetailUpdateWithWhereUniqueWithoutEntryInput | StockExitDetailUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: StockExitDetailUpdateManyWithWhereWithoutEntryInput | StockExitDetailUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
  }

  export type StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryNestedInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput> | StockExitDocumentLineDetailCreateWithoutEntryInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput | StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput[]
    upsert?: StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutEntryInput | StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutEntryInput[]
    createMany?: StockExitDocumentLineDetailCreateManyEntryInputEnvelope
    set?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    disconnect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    delete?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    update?: StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutEntryInput | StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutEntryInput[]
    updateMany?: StockExitDocumentLineDetailUpdateManyWithWhereWithoutEntryInput | StockExitDocumentLineDetailUpdateManyWithWhereWithoutEntryInput[]
    deleteMany?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutExitsInput = {
    create?: XOR<ProductCreateWithoutExitsInput, ProductUncheckedCreateWithoutExitsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutExitsInput
    connect?: ProductWhereUniqueInput
  }

  export type StockExitDetailCreateNestedManyWithoutExitInput = {
    create?: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput> | StockExitDetailCreateWithoutExitInput[] | StockExitDetailUncheckedCreateWithoutExitInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutExitInput | StockExitDetailCreateOrConnectWithoutExitInput[]
    createMany?: StockExitDetailCreateManyExitInputEnvelope
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
  }

  export type StockExitDetailUncheckedCreateNestedManyWithoutExitInput = {
    create?: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput> | StockExitDetailCreateWithoutExitInput[] | StockExitDetailUncheckedCreateWithoutExitInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutExitInput | StockExitDetailCreateOrConnectWithoutExitInput[]
    createMany?: StockExitDetailCreateManyExitInputEnvelope
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutExitsNestedInput = {
    create?: XOR<ProductCreateWithoutExitsInput, ProductUncheckedCreateWithoutExitsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutExitsInput
    upsert?: ProductUpsertWithoutExitsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutExitsInput, ProductUpdateWithoutExitsInput>, ProductUncheckedUpdateWithoutExitsInput>
  }

  export type StockExitDetailUpdateManyWithoutExitNestedInput = {
    create?: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput> | StockExitDetailCreateWithoutExitInput[] | StockExitDetailUncheckedCreateWithoutExitInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutExitInput | StockExitDetailCreateOrConnectWithoutExitInput[]
    upsert?: StockExitDetailUpsertWithWhereUniqueWithoutExitInput | StockExitDetailUpsertWithWhereUniqueWithoutExitInput[]
    createMany?: StockExitDetailCreateManyExitInputEnvelope
    set?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    disconnect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    delete?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    update?: StockExitDetailUpdateWithWhereUniqueWithoutExitInput | StockExitDetailUpdateWithWhereUniqueWithoutExitInput[]
    updateMany?: StockExitDetailUpdateManyWithWhereWithoutExitInput | StockExitDetailUpdateManyWithWhereWithoutExitInput[]
    deleteMany?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
  }

  export type StockExitDetailUncheckedUpdateManyWithoutExitNestedInput = {
    create?: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput> | StockExitDetailCreateWithoutExitInput[] | StockExitDetailUncheckedCreateWithoutExitInput[]
    connectOrCreate?: StockExitDetailCreateOrConnectWithoutExitInput | StockExitDetailCreateOrConnectWithoutExitInput[]
    upsert?: StockExitDetailUpsertWithWhereUniqueWithoutExitInput | StockExitDetailUpsertWithWhereUniqueWithoutExitInput[]
    createMany?: StockExitDetailCreateManyExitInputEnvelope
    set?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    disconnect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    delete?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    connect?: StockExitDetailWhereUniqueInput | StockExitDetailWhereUniqueInput[]
    update?: StockExitDetailUpdateWithWhereUniqueWithoutExitInput | StockExitDetailUpdateWithWhereUniqueWithoutExitInput[]
    updateMany?: StockExitDetailUpdateManyWithWhereWithoutExitInput | StockExitDetailUpdateManyWithWhereWithoutExitInput[]
    deleteMany?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
  }

  export type StockExitCreateNestedOneWithoutDetailsInput = {
    create?: XOR<StockExitCreateWithoutDetailsInput, StockExitUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: StockExitCreateOrConnectWithoutDetailsInput
    connect?: StockExitWhereUniqueInput
  }

  export type StockEntryCreateNestedOneWithoutExitDetailsInput = {
    create?: XOR<StockEntryCreateWithoutExitDetailsInput, StockEntryUncheckedCreateWithoutExitDetailsInput>
    connectOrCreate?: StockEntryCreateOrConnectWithoutExitDetailsInput
    connect?: StockEntryWhereUniqueInput
  }

  export type StockExitUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<StockExitCreateWithoutDetailsInput, StockExitUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: StockExitCreateOrConnectWithoutDetailsInput
    upsert?: StockExitUpsertWithoutDetailsInput
    connect?: StockExitWhereUniqueInput
    update?: XOR<XOR<StockExitUpdateToOneWithWhereWithoutDetailsInput, StockExitUpdateWithoutDetailsInput>, StockExitUncheckedUpdateWithoutDetailsInput>
  }

  export type StockEntryUpdateOneRequiredWithoutExitDetailsNestedInput = {
    create?: XOR<StockEntryCreateWithoutExitDetailsInput, StockEntryUncheckedCreateWithoutExitDetailsInput>
    connectOrCreate?: StockEntryCreateOrConnectWithoutExitDetailsInput
    upsert?: StockEntryUpsertWithoutExitDetailsInput
    connect?: StockEntryWhereUniqueInput
    update?: XOR<XOR<StockEntryUpdateToOneWithWhereWithoutExitDetailsInput, StockEntryUpdateWithoutExitDetailsInput>, StockEntryUncheckedUpdateWithoutExitDetailsInput>
  }

  export type StockExitDocumentLineCreateNestedManyWithoutDocumentInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput> | StockExitDocumentLineCreateWithoutDocumentInput[] | StockExitDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDocumentInput | StockExitDocumentLineCreateOrConnectWithoutDocumentInput[]
    createMany?: StockExitDocumentLineCreateManyDocumentInputEnvelope
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
  }

  export type StockExitDocumentLineUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput> | StockExitDocumentLineCreateWithoutDocumentInput[] | StockExitDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDocumentInput | StockExitDocumentLineCreateOrConnectWithoutDocumentInput[]
    createMany?: StockExitDocumentLineCreateManyDocumentInputEnvelope
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
  }

  export type StockExitDocumentLineUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput> | StockExitDocumentLineCreateWithoutDocumentInput[] | StockExitDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDocumentInput | StockExitDocumentLineCreateOrConnectWithoutDocumentInput[]
    upsert?: StockExitDocumentLineUpsertWithWhereUniqueWithoutDocumentInput | StockExitDocumentLineUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: StockExitDocumentLineCreateManyDocumentInputEnvelope
    set?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    disconnect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    delete?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    update?: StockExitDocumentLineUpdateWithWhereUniqueWithoutDocumentInput | StockExitDocumentLineUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: StockExitDocumentLineUpdateManyWithWhereWithoutDocumentInput | StockExitDocumentLineUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
  }

  export type StockExitDocumentLineUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput> | StockExitDocumentLineCreateWithoutDocumentInput[] | StockExitDocumentLineUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDocumentInput | StockExitDocumentLineCreateOrConnectWithoutDocumentInput[]
    upsert?: StockExitDocumentLineUpsertWithWhereUniqueWithoutDocumentInput | StockExitDocumentLineUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: StockExitDocumentLineCreateManyDocumentInputEnvelope
    set?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    disconnect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    delete?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    connect?: StockExitDocumentLineWhereUniqueInput | StockExitDocumentLineWhereUniqueInput[]
    update?: StockExitDocumentLineUpdateWithWhereUniqueWithoutDocumentInput | StockExitDocumentLineUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: StockExitDocumentLineUpdateManyWithWhereWithoutDocumentInput | StockExitDocumentLineUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
  }

  export type StockExitDocumentCreateNestedOneWithoutLinesInput = {
    create?: XOR<StockExitDocumentCreateWithoutLinesInput, StockExitDocumentUncheckedCreateWithoutLinesInput>
    connectOrCreate?: StockExitDocumentCreateOrConnectWithoutLinesInput
    connect?: StockExitDocumentWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutDocLinesInput = {
    create?: XOR<ProductCreateWithoutDocLinesInput, ProductUncheckedCreateWithoutDocLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDocLinesInput
    connect?: ProductWhereUniqueInput
  }

  export type StockExitDocumentLineDetailCreateNestedManyWithoutLineInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput> | StockExitDocumentLineDetailCreateWithoutLineInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutLineInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutLineInput | StockExitDocumentLineDetailCreateOrConnectWithoutLineInput[]
    createMany?: StockExitDocumentLineDetailCreateManyLineInputEnvelope
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
  }

  export type StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutLineInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput> | StockExitDocumentLineDetailCreateWithoutLineInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutLineInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutLineInput | StockExitDocumentLineDetailCreateOrConnectWithoutLineInput[]
    createMany?: StockExitDocumentLineDetailCreateManyLineInputEnvelope
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
  }

  export type StockExitDocumentUpdateOneRequiredWithoutLinesNestedInput = {
    create?: XOR<StockExitDocumentCreateWithoutLinesInput, StockExitDocumentUncheckedCreateWithoutLinesInput>
    connectOrCreate?: StockExitDocumentCreateOrConnectWithoutLinesInput
    upsert?: StockExitDocumentUpsertWithoutLinesInput
    connect?: StockExitDocumentWhereUniqueInput
    update?: XOR<XOR<StockExitDocumentUpdateToOneWithWhereWithoutLinesInput, StockExitDocumentUpdateWithoutLinesInput>, StockExitDocumentUncheckedUpdateWithoutLinesInput>
  }

  export type ProductUpdateOneRequiredWithoutDocLinesNestedInput = {
    create?: XOR<ProductCreateWithoutDocLinesInput, ProductUncheckedCreateWithoutDocLinesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDocLinesInput
    upsert?: ProductUpsertWithoutDocLinesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDocLinesInput, ProductUpdateWithoutDocLinesInput>, ProductUncheckedUpdateWithoutDocLinesInput>
  }

  export type StockExitDocumentLineDetailUpdateManyWithoutLineNestedInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput> | StockExitDocumentLineDetailCreateWithoutLineInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutLineInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutLineInput | StockExitDocumentLineDetailCreateOrConnectWithoutLineInput[]
    upsert?: StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutLineInput | StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutLineInput[]
    createMany?: StockExitDocumentLineDetailCreateManyLineInputEnvelope
    set?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    disconnect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    delete?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    update?: StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutLineInput | StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutLineInput[]
    updateMany?: StockExitDocumentLineDetailUpdateManyWithWhereWithoutLineInput | StockExitDocumentLineDetailUpdateManyWithWhereWithoutLineInput[]
    deleteMany?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
  }

  export type StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineNestedInput = {
    create?: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput> | StockExitDocumentLineDetailCreateWithoutLineInput[] | StockExitDocumentLineDetailUncheckedCreateWithoutLineInput[]
    connectOrCreate?: StockExitDocumentLineDetailCreateOrConnectWithoutLineInput | StockExitDocumentLineDetailCreateOrConnectWithoutLineInput[]
    upsert?: StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutLineInput | StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutLineInput[]
    createMany?: StockExitDocumentLineDetailCreateManyLineInputEnvelope
    set?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    disconnect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    delete?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    connect?: StockExitDocumentLineDetailWhereUniqueInput | StockExitDocumentLineDetailWhereUniqueInput[]
    update?: StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutLineInput | StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutLineInput[]
    updateMany?: StockExitDocumentLineDetailUpdateManyWithWhereWithoutLineInput | StockExitDocumentLineDetailUpdateManyWithWhereWithoutLineInput[]
    deleteMany?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
  }

  export type StockExitDocumentLineCreateNestedOneWithoutDetailsInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDetailsInput, StockExitDocumentLineUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDetailsInput
    connect?: StockExitDocumentLineWhereUniqueInput
  }

  export type StockEntryCreateNestedOneWithoutDocLineDetailsInput = {
    create?: XOR<StockEntryCreateWithoutDocLineDetailsInput, StockEntryUncheckedCreateWithoutDocLineDetailsInput>
    connectOrCreate?: StockEntryCreateOrConnectWithoutDocLineDetailsInput
    connect?: StockEntryWhereUniqueInput
  }

  export type StockExitDocumentLineUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<StockExitDocumentLineCreateWithoutDetailsInput, StockExitDocumentLineUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: StockExitDocumentLineCreateOrConnectWithoutDetailsInput
    upsert?: StockExitDocumentLineUpsertWithoutDetailsInput
    connect?: StockExitDocumentLineWhereUniqueInput
    update?: XOR<XOR<StockExitDocumentLineUpdateToOneWithWhereWithoutDetailsInput, StockExitDocumentLineUpdateWithoutDetailsInput>, StockExitDocumentLineUncheckedUpdateWithoutDetailsInput>
  }

  export type StockEntryUpdateOneRequiredWithoutDocLineDetailsNestedInput = {
    create?: XOR<StockEntryCreateWithoutDocLineDetailsInput, StockEntryUncheckedCreateWithoutDocLineDetailsInput>
    connectOrCreate?: StockEntryCreateOrConnectWithoutDocLineDetailsInput
    upsert?: StockEntryUpsertWithoutDocLineDetailsInput
    connect?: StockEntryWhereUniqueInput
    update?: XOR<XOR<StockEntryUpdateToOneWithWhereWithoutDocLineDetailsInput, StockEntryUpdateWithoutDocLineDetailsInput>, StockEntryUncheckedUpdateWithoutDocLineDetailsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ProductCreateWithoutCategoryInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    supplier: SupplierCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    supplierId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    price?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    categoryId?: IntFilter<"Product"> | number
    supplierId?: IntFilter<"Product"> | number
  }

  export type ProductCreateWithoutSupplierInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductCreateManySupplierInputEnvelope = {
    data: ProductCreateManySupplierInput | ProductCreateManySupplierInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SupplierCreateWithoutProductsInput = {
    name: string
    email?: string | null
    phone?: string | null
  }

  export type SupplierUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    email?: string | null
    phone?: string | null
  }

  export type SupplierCreateOrConnectWithoutProductsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
  }

  export type MovementCreateWithoutProductInput = {
    type: string
    quantity: number
    createdAt?: Date | string
  }

  export type MovementUncheckedCreateWithoutProductInput = {
    id?: number
    type: string
    quantity: number
    createdAt?: Date | string
  }

  export type MovementCreateOrConnectWithoutProductInput = {
    where: MovementWhereUniqueInput
    create: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput>
  }

  export type MovementCreateManyProductInputEnvelope = {
    data: MovementCreateManyProductInput | MovementCreateManyProductInput[]
  }

  export type StockEntryCreateWithoutProductInput = {
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    exitDetails?: StockExitDetailCreateNestedManyWithoutEntryInput
    docLineDetails?: StockExitDocumentLineDetailCreateNestedManyWithoutEntryInput
  }

  export type StockEntryUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    exitDetails?: StockExitDetailUncheckedCreateNestedManyWithoutEntryInput
    docLineDetails?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutEntryInput
  }

  export type StockEntryCreateOrConnectWithoutProductInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput>
  }

  export type StockEntryCreateManyProductInputEnvelope = {
    data: StockEntryCreateManyProductInput | StockEntryCreateManyProductInput[]
  }

  export type StockExitCreateWithoutProductInput = {
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    details?: StockExitDetailCreateNestedManyWithoutExitInput
  }

  export type StockExitUncheckedCreateWithoutProductInput = {
    id?: number
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    details?: StockExitDetailUncheckedCreateNestedManyWithoutExitInput
  }

  export type StockExitCreateOrConnectWithoutProductInput = {
    where: StockExitWhereUniqueInput
    create: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput>
  }

  export type StockExitCreateManyProductInputEnvelope = {
    data: StockExitCreateManyProductInput | StockExitCreateManyProductInput[]
  }

  export type StockExitDocumentLineCreateWithoutProductInput = {
    quantity: number
    totalCost?: number
    document: StockExitDocumentCreateNestedOneWithoutLinesInput
    details?: StockExitDocumentLineDetailCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineUncheckedCreateWithoutProductInput = {
    id?: number
    documentId: number
    quantity: number
    totalCost?: number
    details?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineCreateOrConnectWithoutProductInput = {
    where: StockExitDocumentLineWhereUniqueInput
    create: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput>
  }

  export type StockExitDocumentLineCreateManyProductInputEnvelope = {
    data: StockExitDocumentLineCreateManyProductInput | StockExitDocumentLineCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SupplierUpsertWithoutProductsInput = {
    update: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProductsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SupplierUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MovementUpsertWithWhereUniqueWithoutProductInput = {
    where: MovementWhereUniqueInput
    update: XOR<MovementUpdateWithoutProductInput, MovementUncheckedUpdateWithoutProductInput>
    create: XOR<MovementCreateWithoutProductInput, MovementUncheckedCreateWithoutProductInput>
  }

  export type MovementUpdateWithWhereUniqueWithoutProductInput = {
    where: MovementWhereUniqueInput
    data: XOR<MovementUpdateWithoutProductInput, MovementUncheckedUpdateWithoutProductInput>
  }

  export type MovementUpdateManyWithWhereWithoutProductInput = {
    where: MovementScalarWhereInput
    data: XOR<MovementUpdateManyMutationInput, MovementUncheckedUpdateManyWithoutProductInput>
  }

  export type MovementScalarWhereInput = {
    AND?: MovementScalarWhereInput | MovementScalarWhereInput[]
    OR?: MovementScalarWhereInput[]
    NOT?: MovementScalarWhereInput | MovementScalarWhereInput[]
    id?: IntFilter<"Movement"> | number
    productId?: IntFilter<"Movement"> | number
    type?: StringFilter<"Movement"> | string
    quantity?: IntFilter<"Movement"> | number
    createdAt?: DateTimeFilter<"Movement"> | Date | string
  }

  export type StockEntryUpsertWithWhereUniqueWithoutProductInput = {
    where: StockEntryWhereUniqueInput
    update: XOR<StockEntryUpdateWithoutProductInput, StockEntryUncheckedUpdateWithoutProductInput>
    create: XOR<StockEntryCreateWithoutProductInput, StockEntryUncheckedCreateWithoutProductInput>
  }

  export type StockEntryUpdateWithWhereUniqueWithoutProductInput = {
    where: StockEntryWhereUniqueInput
    data: XOR<StockEntryUpdateWithoutProductInput, StockEntryUncheckedUpdateWithoutProductInput>
  }

  export type StockEntryUpdateManyWithWhereWithoutProductInput = {
    where: StockEntryScalarWhereInput
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyWithoutProductInput>
  }

  export type StockEntryScalarWhereInput = {
    AND?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    OR?: StockEntryScalarWhereInput[]
    NOT?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    id?: IntFilter<"StockEntry"> | number
    productId?: IntFilter<"StockEntry"> | number
    quantity?: IntFilter<"StockEntry"> | number
    quantityUsed?: IntFilter<"StockEntry"> | number
    availableQuantity?: IntFilter<"StockEntry"> | number
    unitCost?: FloatFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    origin?: StringNullableFilter<"StockEntry"> | string | null
    reason?: StringNullableFilter<"StockEntry"> | string | null
    userId?: StringNullableFilter<"StockEntry"> | string | null
  }

  export type StockExitUpsertWithWhereUniqueWithoutProductInput = {
    where: StockExitWhereUniqueInput
    update: XOR<StockExitUpdateWithoutProductInput, StockExitUncheckedUpdateWithoutProductInput>
    create: XOR<StockExitCreateWithoutProductInput, StockExitUncheckedCreateWithoutProductInput>
  }

  export type StockExitUpdateWithWhereUniqueWithoutProductInput = {
    where: StockExitWhereUniqueInput
    data: XOR<StockExitUpdateWithoutProductInput, StockExitUncheckedUpdateWithoutProductInput>
  }

  export type StockExitUpdateManyWithWhereWithoutProductInput = {
    where: StockExitScalarWhereInput
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyWithoutProductInput>
  }

  export type StockExitScalarWhereInput = {
    AND?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
    OR?: StockExitScalarWhereInput[]
    NOT?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
    id?: IntFilter<"StockExit"> | number
    productId?: IntFilter<"StockExit"> | number
    type?: StringFilter<"StockExit"> | string
    quantity?: IntFilter<"StockExit"> | number
    totalCost?: FloatFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    origin?: StringNullableFilter<"StockExit"> | string | null
    reason?: StringNullableFilter<"StockExit"> | string | null
    userId?: StringNullableFilter<"StockExit"> | string | null
  }

  export type StockExitDocumentLineUpsertWithWhereUniqueWithoutProductInput = {
    where: StockExitDocumentLineWhereUniqueInput
    update: XOR<StockExitDocumentLineUpdateWithoutProductInput, StockExitDocumentLineUncheckedUpdateWithoutProductInput>
    create: XOR<StockExitDocumentLineCreateWithoutProductInput, StockExitDocumentLineUncheckedCreateWithoutProductInput>
  }

  export type StockExitDocumentLineUpdateWithWhereUniqueWithoutProductInput = {
    where: StockExitDocumentLineWhereUniqueInput
    data: XOR<StockExitDocumentLineUpdateWithoutProductInput, StockExitDocumentLineUncheckedUpdateWithoutProductInput>
  }

  export type StockExitDocumentLineUpdateManyWithWhereWithoutProductInput = {
    where: StockExitDocumentLineScalarWhereInput
    data: XOR<StockExitDocumentLineUpdateManyMutationInput, StockExitDocumentLineUncheckedUpdateManyWithoutProductInput>
  }

  export type StockExitDocumentLineScalarWhereInput = {
    AND?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
    OR?: StockExitDocumentLineScalarWhereInput[]
    NOT?: StockExitDocumentLineScalarWhereInput | StockExitDocumentLineScalarWhereInput[]
    id?: IntFilter<"StockExitDocumentLine"> | number
    documentId?: IntFilter<"StockExitDocumentLine"> | number
    productId?: IntFilter<"StockExitDocumentLine"> | number
    quantity?: IntFilter<"StockExitDocumentLine"> | number
    totalCost?: FloatFilter<"StockExitDocumentLine"> | number
  }

  export type ProductCreateWithoutMovementsInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    supplier: SupplierCreateNestedOneWithoutProductsInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutMovementsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
  }

  export type ProductUpsertWithoutMovementsInput = {
    update: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
    create: XOR<ProductCreateWithoutMovementsInput, ProductUncheckedCreateWithoutMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutMovementsInput, ProductUncheckedUpdateWithoutMovementsInput>
  }

  export type ProductUpdateWithoutMovementsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutMovementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutEntriesInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    supplier: SupplierCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutEntriesInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutEntriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutEntriesInput, ProductUncheckedCreateWithoutEntriesInput>
  }

  export type StockExitDetailCreateWithoutEntryInput = {
    quantity: number
    unitCost: number
    subtotal: number
    exit: StockExitCreateNestedOneWithoutDetailsInput
  }

  export type StockExitDetailUncheckedCreateWithoutEntryInput = {
    id?: number
    exitId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailCreateOrConnectWithoutEntryInput = {
    where: StockExitDetailWhereUniqueInput
    create: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput>
  }

  export type StockExitDetailCreateManyEntryInputEnvelope = {
    data: StockExitDetailCreateManyEntryInput | StockExitDetailCreateManyEntryInput[]
  }

  export type StockExitDocumentLineDetailCreateWithoutEntryInput = {
    quantity: number
    unitCost: number
    subtotal: number
    line: StockExitDocumentLineCreateNestedOneWithoutDetailsInput
  }

  export type StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput = {
    id?: number
    lineId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailCreateOrConnectWithoutEntryInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    create: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput>
  }

  export type StockExitDocumentLineDetailCreateManyEntryInputEnvelope = {
    data: StockExitDocumentLineDetailCreateManyEntryInput | StockExitDocumentLineDetailCreateManyEntryInput[]
  }

  export type ProductUpsertWithoutEntriesInput = {
    update: XOR<ProductUpdateWithoutEntriesInput, ProductUncheckedUpdateWithoutEntriesInput>
    create: XOR<ProductCreateWithoutEntriesInput, ProductUncheckedCreateWithoutEntriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutEntriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutEntriesInput, ProductUncheckedUpdateWithoutEntriesInput>
  }

  export type ProductUpdateWithoutEntriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutEntriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StockExitDetailUpsertWithWhereUniqueWithoutEntryInput = {
    where: StockExitDetailWhereUniqueInput
    update: XOR<StockExitDetailUpdateWithoutEntryInput, StockExitDetailUncheckedUpdateWithoutEntryInput>
    create: XOR<StockExitDetailCreateWithoutEntryInput, StockExitDetailUncheckedCreateWithoutEntryInput>
  }

  export type StockExitDetailUpdateWithWhereUniqueWithoutEntryInput = {
    where: StockExitDetailWhereUniqueInput
    data: XOR<StockExitDetailUpdateWithoutEntryInput, StockExitDetailUncheckedUpdateWithoutEntryInput>
  }

  export type StockExitDetailUpdateManyWithWhereWithoutEntryInput = {
    where: StockExitDetailScalarWhereInput
    data: XOR<StockExitDetailUpdateManyMutationInput, StockExitDetailUncheckedUpdateManyWithoutEntryInput>
  }

  export type StockExitDetailScalarWhereInput = {
    AND?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
    OR?: StockExitDetailScalarWhereInput[]
    NOT?: StockExitDetailScalarWhereInput | StockExitDetailScalarWhereInput[]
    id?: IntFilter<"StockExitDetail"> | number
    exitId?: IntFilter<"StockExitDetail"> | number
    entryId?: IntFilter<"StockExitDetail"> | number
    quantity?: IntFilter<"StockExitDetail"> | number
    unitCost?: FloatFilter<"StockExitDetail"> | number
    subtotal?: FloatFilter<"StockExitDetail"> | number
  }

  export type StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutEntryInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    update: XOR<StockExitDocumentLineDetailUpdateWithoutEntryInput, StockExitDocumentLineDetailUncheckedUpdateWithoutEntryInput>
    create: XOR<StockExitDocumentLineDetailCreateWithoutEntryInput, StockExitDocumentLineDetailUncheckedCreateWithoutEntryInput>
  }

  export type StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutEntryInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    data: XOR<StockExitDocumentLineDetailUpdateWithoutEntryInput, StockExitDocumentLineDetailUncheckedUpdateWithoutEntryInput>
  }

  export type StockExitDocumentLineDetailUpdateManyWithWhereWithoutEntryInput = {
    where: StockExitDocumentLineDetailScalarWhereInput
    data: XOR<StockExitDocumentLineDetailUpdateManyMutationInput, StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryInput>
  }

  export type StockExitDocumentLineDetailScalarWhereInput = {
    AND?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
    OR?: StockExitDocumentLineDetailScalarWhereInput[]
    NOT?: StockExitDocumentLineDetailScalarWhereInput | StockExitDocumentLineDetailScalarWhereInput[]
    id?: IntFilter<"StockExitDocumentLineDetail"> | number
    lineId?: IntFilter<"StockExitDocumentLineDetail"> | number
    entryId?: IntFilter<"StockExitDocumentLineDetail"> | number
    quantity?: IntFilter<"StockExitDocumentLineDetail"> | number
    unitCost?: FloatFilter<"StockExitDocumentLineDetail"> | number
    subtotal?: FloatFilter<"StockExitDocumentLineDetail"> | number
  }

  export type ProductCreateWithoutExitsInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    supplier: SupplierCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutExitsInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    docLines?: StockExitDocumentLineUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutExitsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutExitsInput, ProductUncheckedCreateWithoutExitsInput>
  }

  export type StockExitDetailCreateWithoutExitInput = {
    quantity: number
    unitCost: number
    subtotal: number
    entry: StockEntryCreateNestedOneWithoutExitDetailsInput
  }

  export type StockExitDetailUncheckedCreateWithoutExitInput = {
    id?: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailCreateOrConnectWithoutExitInput = {
    where: StockExitDetailWhereUniqueInput
    create: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput>
  }

  export type StockExitDetailCreateManyExitInputEnvelope = {
    data: StockExitDetailCreateManyExitInput | StockExitDetailCreateManyExitInput[]
  }

  export type ProductUpsertWithoutExitsInput = {
    update: XOR<ProductUpdateWithoutExitsInput, ProductUncheckedUpdateWithoutExitsInput>
    create: XOR<ProductCreateWithoutExitsInput, ProductUncheckedCreateWithoutExitsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutExitsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutExitsInput, ProductUncheckedUpdateWithoutExitsInput>
  }

  export type ProductUpdateWithoutExitsInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutExitsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StockExitDetailUpsertWithWhereUniqueWithoutExitInput = {
    where: StockExitDetailWhereUniqueInput
    update: XOR<StockExitDetailUpdateWithoutExitInput, StockExitDetailUncheckedUpdateWithoutExitInput>
    create: XOR<StockExitDetailCreateWithoutExitInput, StockExitDetailUncheckedCreateWithoutExitInput>
  }

  export type StockExitDetailUpdateWithWhereUniqueWithoutExitInput = {
    where: StockExitDetailWhereUniqueInput
    data: XOR<StockExitDetailUpdateWithoutExitInput, StockExitDetailUncheckedUpdateWithoutExitInput>
  }

  export type StockExitDetailUpdateManyWithWhereWithoutExitInput = {
    where: StockExitDetailScalarWhereInput
    data: XOR<StockExitDetailUpdateManyMutationInput, StockExitDetailUncheckedUpdateManyWithoutExitInput>
  }

  export type StockExitCreateWithoutDetailsInput = {
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    product: ProductCreateNestedOneWithoutExitsInput
  }

  export type StockExitUncheckedCreateWithoutDetailsInput = {
    id?: number
    productId: number
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
  }

  export type StockExitCreateOrConnectWithoutDetailsInput = {
    where: StockExitWhereUniqueInput
    create: XOR<StockExitCreateWithoutDetailsInput, StockExitUncheckedCreateWithoutDetailsInput>
  }

  export type StockEntryCreateWithoutExitDetailsInput = {
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    product: ProductCreateNestedOneWithoutEntriesInput
    docLineDetails?: StockExitDocumentLineDetailCreateNestedManyWithoutEntryInput
  }

  export type StockEntryUncheckedCreateWithoutExitDetailsInput = {
    id?: number
    productId: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    docLineDetails?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutEntryInput
  }

  export type StockEntryCreateOrConnectWithoutExitDetailsInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutExitDetailsInput, StockEntryUncheckedCreateWithoutExitDetailsInput>
  }

  export type StockExitUpsertWithoutDetailsInput = {
    update: XOR<StockExitUpdateWithoutDetailsInput, StockExitUncheckedUpdateWithoutDetailsInput>
    create: XOR<StockExitCreateWithoutDetailsInput, StockExitUncheckedCreateWithoutDetailsInput>
    where?: StockExitWhereInput
  }

  export type StockExitUpdateToOneWithWhereWithoutDetailsInput = {
    where?: StockExitWhereInput
    data: XOR<StockExitUpdateWithoutDetailsInput, StockExitUncheckedUpdateWithoutDetailsInput>
  }

  export type StockExitUpdateWithoutDetailsInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutExitsNestedInput
  }

  export type StockExitUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockEntryUpsertWithoutExitDetailsInput = {
    update: XOR<StockEntryUpdateWithoutExitDetailsInput, StockEntryUncheckedUpdateWithoutExitDetailsInput>
    create: XOR<StockEntryCreateWithoutExitDetailsInput, StockEntryUncheckedCreateWithoutExitDetailsInput>
    where?: StockEntryWhereInput
  }

  export type StockEntryUpdateToOneWithWhereWithoutExitDetailsInput = {
    where?: StockEntryWhereInput
    data: XOR<StockEntryUpdateWithoutExitDetailsInput, StockEntryUncheckedUpdateWithoutExitDetailsInput>
  }

  export type StockEntryUpdateWithoutExitDetailsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutEntriesNestedInput
    docLineDetails?: StockExitDocumentLineDetailUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryUncheckedUpdateWithoutExitDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    docLineDetails?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type StockExitDocumentLineCreateWithoutDocumentInput = {
    quantity: number
    totalCost?: number
    product: ProductCreateNestedOneWithoutDocLinesInput
    details?: StockExitDocumentLineDetailCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineUncheckedCreateWithoutDocumentInput = {
    id?: number
    productId: number
    quantity: number
    totalCost?: number
    details?: StockExitDocumentLineDetailUncheckedCreateNestedManyWithoutLineInput
  }

  export type StockExitDocumentLineCreateOrConnectWithoutDocumentInput = {
    where: StockExitDocumentLineWhereUniqueInput
    create: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput>
  }

  export type StockExitDocumentLineCreateManyDocumentInputEnvelope = {
    data: StockExitDocumentLineCreateManyDocumentInput | StockExitDocumentLineCreateManyDocumentInput[]
  }

  export type StockExitDocumentLineUpsertWithWhereUniqueWithoutDocumentInput = {
    where: StockExitDocumentLineWhereUniqueInput
    update: XOR<StockExitDocumentLineUpdateWithoutDocumentInput, StockExitDocumentLineUncheckedUpdateWithoutDocumentInput>
    create: XOR<StockExitDocumentLineCreateWithoutDocumentInput, StockExitDocumentLineUncheckedCreateWithoutDocumentInput>
  }

  export type StockExitDocumentLineUpdateWithWhereUniqueWithoutDocumentInput = {
    where: StockExitDocumentLineWhereUniqueInput
    data: XOR<StockExitDocumentLineUpdateWithoutDocumentInput, StockExitDocumentLineUncheckedUpdateWithoutDocumentInput>
  }

  export type StockExitDocumentLineUpdateManyWithWhereWithoutDocumentInput = {
    where: StockExitDocumentLineScalarWhereInput
    data: XOR<StockExitDocumentLineUpdateManyMutationInput, StockExitDocumentLineUncheckedUpdateManyWithoutDocumentInput>
  }

  export type StockExitDocumentCreateWithoutLinesInput = {
    reference: string
    type: string
    totalCost?: number
    documentDate?: Date | string
    reason?: string | null
    userId?: string | null
  }

  export type StockExitDocumentUncheckedCreateWithoutLinesInput = {
    id?: number
    reference: string
    type: string
    totalCost?: number
    documentDate?: Date | string
    reason?: string | null
    userId?: string | null
  }

  export type StockExitDocumentCreateOrConnectWithoutLinesInput = {
    where: StockExitDocumentWhereUniqueInput
    create: XOR<StockExitDocumentCreateWithoutLinesInput, StockExitDocumentUncheckedCreateWithoutLinesInput>
  }

  export type ProductCreateWithoutDocLinesInput = {
    name: string
    description?: string | null
    price: number
    quantity?: number
    category: CategoryCreateNestedOneWithoutProductsInput
    supplier: SupplierCreateNestedOneWithoutProductsInput
    movements?: MovementCreateNestedManyWithoutProductInput
    entries?: StockEntryCreateNestedManyWithoutProductInput
    exits?: StockExitCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDocLinesInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
    supplierId: number
    movements?: MovementUncheckedCreateNestedManyWithoutProductInput
    entries?: StockEntryUncheckedCreateNestedManyWithoutProductInput
    exits?: StockExitUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDocLinesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDocLinesInput, ProductUncheckedCreateWithoutDocLinesInput>
  }

  export type StockExitDocumentLineDetailCreateWithoutLineInput = {
    quantity: number
    unitCost: number
    subtotal: number
    entry: StockEntryCreateNestedOneWithoutDocLineDetailsInput
  }

  export type StockExitDocumentLineDetailUncheckedCreateWithoutLineInput = {
    id?: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailCreateOrConnectWithoutLineInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    create: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput>
  }

  export type StockExitDocumentLineDetailCreateManyLineInputEnvelope = {
    data: StockExitDocumentLineDetailCreateManyLineInput | StockExitDocumentLineDetailCreateManyLineInput[]
  }

  export type StockExitDocumentUpsertWithoutLinesInput = {
    update: XOR<StockExitDocumentUpdateWithoutLinesInput, StockExitDocumentUncheckedUpdateWithoutLinesInput>
    create: XOR<StockExitDocumentCreateWithoutLinesInput, StockExitDocumentUncheckedCreateWithoutLinesInput>
    where?: StockExitDocumentWhereInput
  }

  export type StockExitDocumentUpdateToOneWithWhereWithoutLinesInput = {
    where?: StockExitDocumentWhereInput
    data: XOR<StockExitDocumentUpdateWithoutLinesInput, StockExitDocumentUncheckedUpdateWithoutLinesInput>
  }

  export type StockExitDocumentUpdateWithoutLinesInput = {
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitDocumentUncheckedUpdateWithoutLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    reference?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    totalCost?: FloatFieldUpdateOperationsInput | number
    documentDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpsertWithoutDocLinesInput = {
    update: XOR<ProductUpdateWithoutDocLinesInput, ProductUncheckedUpdateWithoutDocLinesInput>
    create: XOR<ProductCreateWithoutDocLinesInput, ProductUncheckedCreateWithoutDocLinesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDocLinesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDocLinesInput, ProductUncheckedUpdateWithoutDocLinesInput>
  }

  export type ProductUpdateWithoutDocLinesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDocLinesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
  }

  export type StockExitDocumentLineDetailUpsertWithWhereUniqueWithoutLineInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    update: XOR<StockExitDocumentLineDetailUpdateWithoutLineInput, StockExitDocumentLineDetailUncheckedUpdateWithoutLineInput>
    create: XOR<StockExitDocumentLineDetailCreateWithoutLineInput, StockExitDocumentLineDetailUncheckedCreateWithoutLineInput>
  }

  export type StockExitDocumentLineDetailUpdateWithWhereUniqueWithoutLineInput = {
    where: StockExitDocumentLineDetailWhereUniqueInput
    data: XOR<StockExitDocumentLineDetailUpdateWithoutLineInput, StockExitDocumentLineDetailUncheckedUpdateWithoutLineInput>
  }

  export type StockExitDocumentLineDetailUpdateManyWithWhereWithoutLineInput = {
    where: StockExitDocumentLineDetailScalarWhereInput
    data: XOR<StockExitDocumentLineDetailUpdateManyMutationInput, StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineInput>
  }

  export type StockExitDocumentLineCreateWithoutDetailsInput = {
    quantity: number
    totalCost?: number
    document: StockExitDocumentCreateNestedOneWithoutLinesInput
    product: ProductCreateNestedOneWithoutDocLinesInput
  }

  export type StockExitDocumentLineUncheckedCreateWithoutDetailsInput = {
    id?: number
    documentId: number
    productId: number
    quantity: number
    totalCost?: number
  }

  export type StockExitDocumentLineCreateOrConnectWithoutDetailsInput = {
    where: StockExitDocumentLineWhereUniqueInput
    create: XOR<StockExitDocumentLineCreateWithoutDetailsInput, StockExitDocumentLineUncheckedCreateWithoutDetailsInput>
  }

  export type StockEntryCreateWithoutDocLineDetailsInput = {
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    product: ProductCreateNestedOneWithoutEntriesInput
    exitDetails?: StockExitDetailCreateNestedManyWithoutEntryInput
  }

  export type StockEntryUncheckedCreateWithoutDocLineDetailsInput = {
    id?: number
    productId: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
    exitDetails?: StockExitDetailUncheckedCreateNestedManyWithoutEntryInput
  }

  export type StockEntryCreateOrConnectWithoutDocLineDetailsInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutDocLineDetailsInput, StockEntryUncheckedCreateWithoutDocLineDetailsInput>
  }

  export type StockExitDocumentLineUpsertWithoutDetailsInput = {
    update: XOR<StockExitDocumentLineUpdateWithoutDetailsInput, StockExitDocumentLineUncheckedUpdateWithoutDetailsInput>
    create: XOR<StockExitDocumentLineCreateWithoutDetailsInput, StockExitDocumentLineUncheckedCreateWithoutDetailsInput>
    where?: StockExitDocumentLineWhereInput
  }

  export type StockExitDocumentLineUpdateToOneWithWhereWithoutDetailsInput = {
    where?: StockExitDocumentLineWhereInput
    data: XOR<StockExitDocumentLineUpdateWithoutDetailsInput, StockExitDocumentLineUncheckedUpdateWithoutDetailsInput>
  }

  export type StockExitDocumentLineUpdateWithoutDetailsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    document?: StockExitDocumentUpdateOneRequiredWithoutLinesNestedInput
    product?: ProductUpdateOneRequiredWithoutDocLinesNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateWithoutDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type StockEntryUpsertWithoutDocLineDetailsInput = {
    update: XOR<StockEntryUpdateWithoutDocLineDetailsInput, StockEntryUncheckedUpdateWithoutDocLineDetailsInput>
    create: XOR<StockEntryCreateWithoutDocLineDetailsInput, StockEntryUncheckedCreateWithoutDocLineDetailsInput>
    where?: StockEntryWhereInput
  }

  export type StockEntryUpdateToOneWithWhereWithoutDocLineDetailsInput = {
    where?: StockEntryWhereInput
    data: XOR<StockEntryUpdateWithoutDocLineDetailsInput, StockEntryUncheckedUpdateWithoutDocLineDetailsInput>
  }

  export type StockEntryUpdateWithoutDocLineDetailsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: ProductUpdateOneRequiredWithoutEntriesNestedInput
    exitDetails?: StockExitDetailUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryUncheckedUpdateWithoutDocLineDetailsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    exitDetails?: StockExitDetailUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    supplierId: number
  }

  export type ProductUpdateWithoutCategoryInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplier?: SupplierUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    supplierId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManySupplierInput = {
    id?: number
    name: string
    description?: string | null
    price: number
    quantity?: number
    categoryId: number
  }

  export type ProductUpdateWithoutSupplierInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    movements?: MovementUpdateManyWithoutProductNestedInput
    entries?: StockEntryUpdateManyWithoutProductNestedInput
    exits?: StockExitUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
    movements?: MovementUncheckedUpdateManyWithoutProductNestedInput
    entries?: StockEntryUncheckedUpdateManyWithoutProductNestedInput
    exits?: StockExitUncheckedUpdateManyWithoutProductNestedInput
    docLines?: StockExitDocumentLineUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type MovementCreateManyProductInput = {
    id?: number
    type: string
    quantity: number
    createdAt?: Date | string
  }

  export type StockEntryCreateManyProductInput = {
    id?: number
    quantity: number
    quantityUsed?: number
    availableQuantity: number
    unitCost: number
    entryDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
  }

  export type StockExitCreateManyProductInput = {
    id?: number
    type: string
    quantity: number
    totalCost: number
    exitDate?: Date | string
    origin?: string | null
    reason?: string | null
    userId?: string | null
  }

  export type StockExitDocumentLineCreateManyProductInput = {
    id?: number
    documentId: number
    quantity: number
    totalCost?: number
  }

  export type MovementUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MovementUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    exitDetails?: StockExitDetailUpdateManyWithoutEntryNestedInput
    docLineDetails?: StockExitDocumentLineDetailUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    exitDetails?: StockExitDetailUncheckedUpdateManyWithoutEntryNestedInput
    docLineDetails?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryNestedInput
  }

  export type StockEntryUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    quantityUsed?: IntFieldUpdateOperationsInput | number
    availableQuantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitUpdateWithoutProductInput = {
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: StockExitDetailUpdateManyWithoutExitNestedInput
  }

  export type StockExitUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    details?: StockExitDetailUncheckedUpdateManyWithoutExitNestedInput
  }

  export type StockExitUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    origin?: NullableStringFieldUpdateOperationsInput | string | null
    reason?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitDocumentLineUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    document?: StockExitDocumentUpdateOneRequiredWithoutLinesNestedInput
    details?: StockExitDocumentLineDetailUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    details?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailCreateManyEntryInput = {
    id?: number
    exitId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailCreateManyEntryInput = {
    id?: number
    lineId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailUpdateWithoutEntryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    exit?: StockExitUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type StockExitDetailUncheckedUpdateWithoutEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    exitId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailUncheckedUpdateManyWithoutEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    exitId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailUpdateWithoutEntryInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    line?: StockExitDocumentLineUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type StockExitDocumentLineDetailUncheckedUpdateWithoutEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailUncheckedUpdateManyWithoutEntryInput = {
    id?: IntFieldUpdateOperationsInput | number
    lineId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailCreateManyExitInput = {
    id?: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDetailUpdateWithoutExitInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    entry?: StockEntryUpdateOneRequiredWithoutExitDetailsNestedInput
  }

  export type StockExitDetailUncheckedUpdateWithoutExitInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDetailUncheckedUpdateManyWithoutExitInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineCreateManyDocumentInput = {
    id?: number
    productId: number
    quantity: number
    totalCost?: number
  }

  export type StockExitDocumentLineUpdateWithoutDocumentInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutDocLinesNestedInput
    details?: StockExitDocumentLineDetailUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
    details?: StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineNestedInput
  }

  export type StockExitDocumentLineUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    totalCost?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailCreateManyLineInput = {
    id?: number
    entryId: number
    quantity: number
    unitCost: number
    subtotal: number
  }

  export type StockExitDocumentLineDetailUpdateWithoutLineInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    entry?: StockEntryUpdateOneRequiredWithoutDocLineDetailsNestedInput
  }

  export type StockExitDocumentLineDetailUncheckedUpdateWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type StockExitDocumentLineDetailUncheckedUpdateManyWithoutLineInput = {
    id?: IntFieldUpdateOperationsInput | number
    entryId?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitCost?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CategoryCountOutputTypeDefaultArgs instead
     */
    export type CategoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierCountOutputTypeDefaultArgs instead
     */
    export type SupplierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductCountOutputTypeDefaultArgs instead
     */
    export type ProductCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockEntryCountOutputTypeDefaultArgs instead
     */
    export type StockEntryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockEntryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitCountOutputTypeDefaultArgs instead
     */
    export type StockExitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDocumentCountOutputTypeDefaultArgs instead
     */
    export type StockExitDocumentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDocumentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDocumentLineCountOutputTypeDefaultArgs instead
     */
    export type StockExitDocumentLineCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDocumentLineCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CategoryDefaultArgs instead
     */
    export type CategoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CategoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SupplierDefaultArgs instead
     */
    export type SupplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SupplierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProductDefaultArgs instead
     */
    export type ProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProductDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MovementDefaultArgs instead
     */
    export type MovementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MovementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockEntryDefaultArgs instead
     */
    export type StockEntryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockEntryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDefaultArgs instead
     */
    export type StockExitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDetailDefaultArgs instead
     */
    export type StockExitDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDetailDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDocumentDefaultArgs instead
     */
    export type StockExitDocumentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDocumentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDocumentLineDefaultArgs instead
     */
    export type StockExitDocumentLineArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDocumentLineDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StockExitDocumentLineDetailDefaultArgs instead
     */
    export type StockExitDocumentLineDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StockExitDocumentLineDetailDefaultArgs<ExtArgs>

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