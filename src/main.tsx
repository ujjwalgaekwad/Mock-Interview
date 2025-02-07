import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'

import PublickLayout from '@/layout/PublickLayout.tsx'
import HomePage from '@/pages/HomePage.tsx'

import AuthenticationLayout from '@/layout/AuthenticationLayout.tsx'
import SignInPage from '@/pages/SignInPage.tsx'
import SignUpPage from '@/pages/SignUpPage.tsx'
import ProtectedRoute from '@/layout/ProtectedRoute'
import MainLayout from '@/layout/MainLayout'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<PublickLayout />}>
        <Route element={<HomePage />} path='/' />
      </Route>
      <Route element={<AuthenticationLayout />}>
        <Route element={<SignInPage />} path='/signin' />
        <Route element={<SignUpPage />} path='/signup' />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />} />
      </Route>
    </Route>
  )
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>,
)
