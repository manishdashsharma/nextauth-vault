'use client';

import { motion } from 'framer-motion';
import { LogOut, User, Mail, Calendar, Shield, Github, Chrome } from 'lucide-react';
import { logout } from '@/lib/auth';
import { Session } from 'next-auth';
import Image from 'next/image';

interface UserDashboardProps {
  session: Session;
}

export default function UserDashboard({ session }: UserDashboardProps) {
  const user = session.user;
  const joinDate = session.user?.email ? new Date().toLocaleDateString() : 'Unknown';

  return (
    <div className="min-h-screen bg-black text-white">

      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-black to-blue-900/10 pointer-events-none" />
      
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative border-b border-gray-800 bg-black/50 backdrop-blur-xl"
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-white" />
            </div>
            <h1 className="text-xl font-bold">Dashboard</h1>
          </div>
          
          <form action={logout}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors duration-200"
              type="submit"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </motion.button>
          </form>
        </div>
      </motion.header>

      <main className="relative max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6">
              <div className="text-center mb-6">
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="relative inline-block mb-4"
                    >
                    <Image
                        src={user?.image || '/default-avatar.png'}
                        alt={user?.name || 'User'}
                        width={96}
                        height={96}
                        className="rounded-full border-4 border-gray-700"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-gray-900 flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    </motion.div>
                
                <h2 className="text-2xl font-bold text-white mb-1">
                  {user?.name || 'Anonymous User'}
                </h2>
                <p className="text-gray-400">Welcome back!</p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-blue-400" />
                  <span className="text-sm">{user?.email || 'No email provided'}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Calendar className="w-4 h-4 text-green-400" />
                  <span className="text-sm">Joined {joinDate}</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  {session.user?.image?.includes('github') ? (
                    <Github className="w-4 h-4 text-gray-400" />
                  ) : (
                    <Chrome className="w-4 h-4 text-red-400" />
                  )}
                  <span className="text-sm">
                    Signed in with {session.user?.image?.includes('github') ? 'GitHub' : 'Google'}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-2 space-y-6">
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-purple-400" />
                <span>Account Details</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Full Name</label>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                    <span className="text-white">{user?.name || 'Not provided'}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Email Address</label>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                    <span className="text-white">{user?.email || 'Not provided'}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Account ID</label>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3">
                    <span className="text-white font-mono text-sm">{session.user?.id || 'N/A'}</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-400">Provider</label>
                  <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 flex items-center space-x-2">
                    {session.user?.image?.includes('github') ? (
                      <>
                        <Github className="w-5 h-5 text-gray-400" />
                        <span className="text-white">GitHub</span>
                      </>
                    ) : (
                      <>
                        <Chrome className="w-5 h-5 text-red-400" />
                        <span className="text-white">Google</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-400" />
                <span>Session Information</span>
              </h3>
              
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Session Status</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400">Active</span>
                  </div>
                </div>
                
                <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4">
                  <h4 className="font-medium text-white mb-2">Security</h4>
                  <p className="text-gray-400 text-sm">
                    Your session is encrypted and secured with OAuth 2.0
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}