// package: user
// file: user.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}

export class GetUsersResponse extends jspb.Message { 

    hasUser(): boolean;
    clearUser(): void;
    getUser(): UserResponse | undefined;
    setUser(value?: UserResponse): GetUsersResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUsersResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetUsersResponse): GetUsersResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUsersResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUsersResponse;
    static deserializeBinaryFromReader(message: GetUsersResponse, reader: jspb.BinaryReader): GetUsersResponse;
}

export namespace GetUsersResponse {
    export type AsObject = {
        user?: UserResponse.AsObject,
    }
}

export class VerifyRequest extends jspb.Message { 
    getToken(): string;
    setToken(value: string): VerifyRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyRequest.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyRequest): VerifyRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyRequest;
    static deserializeBinaryFromReader(message: VerifyRequest, reader: jspb.BinaryReader): VerifyRequest;
}

export namespace VerifyRequest {
    export type AsObject = {
        token: string,
    }
}

export class GetUserRequest extends jspb.Message { 
    getUserId(): string;
    setUserId(value: string): GetUserRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetUserRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetUserRequest): GetUserRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetUserRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetUserRequest;
    static deserializeBinaryFromReader(message: GetUserRequest, reader: jspb.BinaryReader): GetUserRequest;
}

export namespace GetUserRequest {
    export type AsObject = {
        userId: string,
    }
}

export class LoginRequest extends jspb.Message { 
    getEmail(): string;
    setEmail(value: string): LoginRequest;
    getPassword(): string;
    setPassword(value: string): LoginRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LoginRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LoginRequest): LoginRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LoginRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LoginRequest;
    static deserializeBinaryFromReader(message: LoginRequest, reader: jspb.BinaryReader): LoginRequest;
}

export namespace LoginRequest {
    export type AsObject = {
        email: string,
        password: string,
    }
}

export class RegisterRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): RegisterRequest;
    getEmail(): string;
    setEmail(value: string): RegisterRequest;
    getPassword(): string;
    setPassword(value: string): RegisterRequest;
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): RegisterRequest;
    addPermissions(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): RegisterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: RegisterRequest): RegisterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: RegisterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): RegisterRequest;
    static deserializeBinaryFromReader(message: RegisterRequest, reader: jspb.BinaryReader): RegisterRequest;
}

export namespace RegisterRequest {
    export type AsObject = {
        name: string,
        email: string,
        password: string,
        permissionsList: Array<string>,
    }
}

export class TokenRecord extends jspb.Message { 
    getToken(): string;
    setToken(value: string): TokenRecord;
    getIsActive(): boolean;
    setIsActive(value: boolean): TokenRecord;
    getLastUsed(): string;
    setLastUsed(value: string): TokenRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TokenRecord.AsObject;
    static toObject(includeInstance: boolean, msg: TokenRecord): TokenRecord.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TokenRecord, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TokenRecord;
    static deserializeBinaryFromReader(message: TokenRecord, reader: jspb.BinaryReader): TokenRecord;
}

export namespace TokenRecord {
    export type AsObject = {
        token: string,
        isActive: boolean,
        lastUsed: string,
    }
}

export class UserResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): UserResponse;
    getName(): string;
    setName(value: string): UserResponse;
    getEmail(): string;
    setEmail(value: string): UserResponse;
    clearPermissionsList(): void;
    getPermissionsList(): Array<string>;
    setPermissionsList(value: Array<string>): UserResponse;
    addPermissions(value: string, index?: number): string;
    clearTokensList(): void;
    getTokensList(): Array<TokenRecord>;
    setTokensList(value: Array<TokenRecord>): UserResponse;
    addTokens(value?: TokenRecord, index?: number): TokenRecord;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UserResponse): UserResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserResponse;
    static deserializeBinaryFromReader(message: UserResponse, reader: jspb.BinaryReader): UserResponse;
}

export namespace UserResponse {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
        permissionsList: Array<string>,
        tokensList: Array<TokenRecord.AsObject>,
    }
}

export class VerifyResponse extends jspb.Message { 
    getId(): string;
    setId(value: string): VerifyResponse;
    getName(): string;
    setName(value: string): VerifyResponse;
    getEmail(): string;
    setEmail(value: string): VerifyResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VerifyResponse.AsObject;
    static toObject(includeInstance: boolean, msg: VerifyResponse): VerifyResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VerifyResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VerifyResponse;
    static deserializeBinaryFromReader(message: VerifyResponse, reader: jspb.BinaryReader): VerifyResponse;
}

export namespace VerifyResponse {
    export type AsObject = {
        id: string,
        name: string,
        email: string,
    }
}
