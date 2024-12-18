import React from "react";

function Login() {
  return (
    <div className="container mx-auto max-w-md py-8">
    <div className="bg-white rounded-lg shadow-md">
      <div className="p-6 border-b">
        <h2 className="text-xl font-bold">Log in to Byzor</h2>
        <p className="text-gray-600">Enter your credentials to access your account</p>
      </div>
      <div className="p-6">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="text-right">
            <a href="/forgot-password" className="text-sm text-primary hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-md shadow-sm hover:bg-primary-dark focus:ring focus:ring-primary-light"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="p-4 border-t flex justify-center">
        <p className="text-sm text-gray-600">
          Don't have an account?{" "}
          <a href="/signup" className="text-primary hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
  );
}

export default Login;