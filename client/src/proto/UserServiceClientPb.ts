/**
 * @fileoverview gRPC-Web generated client stub for demo_user
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as user_pb from './user_pb';


export class UserSvcClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'binary';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInforegister = new grpcWeb.MethodDescriptor(
    '/demo_user.UserSvc/register',
    grpcWeb.MethodType.UNARY,
    user_pb.RegisterRequest,
    user_pb.UserResponse,
    (request: user_pb.RegisterRequest) => {
      return request.serializeBinary();
    },
    user_pb.UserResponse.deserializeBinary
  );

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.UserResponse>;

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<user_pb.UserResponse>;

  register(
    request: user_pb.RegisterRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/demo_user.UserSvc/register',
        request,
        metadata || {},
        this.methodInforegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/demo_user.UserSvc/register',
    request,
    metadata || {},
    this.methodInforegister);
  }

  methodInfologin = new grpcWeb.MethodDescriptor(
    '/demo_user.UserSvc/login',
    grpcWeb.MethodType.UNARY,
    user_pb.LoginRequest,
    user_pb.UserResponse,
    (request: user_pb.LoginRequest) => {
      return request.serializeBinary();
    },
    user_pb.UserResponse.deserializeBinary
  );

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.UserResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.UserResponse) => void): grpcWeb.ClientReadableStream<user_pb.UserResponse>;

  login(
    request: user_pb.LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.UserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/demo_user.UserSvc/login',
        request,
        metadata || {},
        this.methodInfologin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/demo_user.UserSvc/login',
    request,
    metadata || {},
    this.methodInfologin);
  }

  methodInfoverify = new grpcWeb.MethodDescriptor(
    '/demo_user.UserSvc/verify',
    grpcWeb.MethodType.UNARY,
    user_pb.VerifyRequest,
    user_pb.VerifyResponse,
    (request: user_pb.VerifyRequest) => {
      return request.serializeBinary();
    },
    user_pb.VerifyResponse.deserializeBinary
  );

  verify(
    request: user_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.VerifyResponse>;

  verify(
    request: user_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.VerifyResponse) => void): grpcWeb.ClientReadableStream<user_pb.VerifyResponse>;

  verify(
    request: user_pb.VerifyRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.VerifyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/demo_user.UserSvc/verify',
        request,
        metadata || {},
        this.methodInfoverify,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/demo_user.UserSvc/verify',
    request,
    metadata || {},
    this.methodInfoverify);
  }

  methodInfogetUser = new grpcWeb.MethodDescriptor(
    '/demo_user.UserSvc/getUser',
    grpcWeb.MethodType.UNARY,
    user_pb.GetUserRequest,
    user_pb.VerifyResponse,
    (request: user_pb.GetUserRequest) => {
      return request.serializeBinary();
    },
    user_pb.VerifyResponse.deserializeBinary
  );

  getUser(
    request: user_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<user_pb.VerifyResponse>;

  getUser(
    request: user_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: user_pb.VerifyResponse) => void): grpcWeb.ClientReadableStream<user_pb.VerifyResponse>;

  getUser(
    request: user_pb.GetUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: user_pb.VerifyResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/demo_user.UserSvc/getUser',
        request,
        metadata || {},
        this.methodInfogetUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/demo_user.UserSvc/getUser',
    request,
    metadata || {},
    this.methodInfogetUser);
  }

}

