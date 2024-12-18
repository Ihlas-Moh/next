import React from "react";

function Signup() {
  return (
    <div className="container mx-auto max-w-md py-8">
      <div className="bg-white rounded-lg shadow-md">
        <div className="p-6 border-b">
          <h2 className="text-xl font-bold">Sign Up for Byzor</h2>
          <p className="text-gray-600">Create your account to get started</p>
        </div>
        <div className="p-6">
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">I am a:</label>
              <div className="flex space-x-4 mt-2">
                <div className="flex items-center space-x-2">
                  <input type="radio" id="seller" name="userType" className="radio-button" />
                  <label htmlFor="seller" className="text-sm">Seller</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="buyer" name="userType" className="radio-button" />
                  <label htmlFor="buyer" className="text-sm">Buyer</label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" id="affiliate" name="userType" className="radio-button" />
                  <label htmlFor="affiliate" className="text-sm">Affiliate</label>
                </div>
              </div>
            </div>
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
            <div>
              <label className="block text-sm font-medium text-gray-700">Referral Code (Optional)</label>
              <input
                type="text"
                placeholder="Enter referral code"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
              />
              <p className="mt-1 text-sm text-gray-500">If you have a referral code, enter it here</p>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md shadow-sm hover:bg-primary-dark focus:ring focus:ring-primary-light"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="p-4 border-t flex justify-center">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-primary hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;

