import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/store.js'
import { BrowserRouter, createBrowserRouter, createRoutesFromElements , Route, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home.jsx'
import Login from './components/Pages/login.jsx'
import SignUp from './components/Pages/SignUp.jsx'
import AddPost from './components/Pages/AddPost.jsx'
import AllPost from './components/Pages/AllPost.jsx'
import Protected from './components/AuthLayout.jsx'
import EditPost from './components/Pages/EditPost.jsx'
import Post from './components/Pages/Post.jsx'

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
  <Route path="" element={<Home/>} />
  <Route path="login" element={
    <Protected authentication={false}><Login/></Protected>
  }/>
  <Route path="signup" element={
    <Protected authentication={false}><SignUp/></Protected>
  }/>
  <Route path="all-posts" element={
    <Protected authentication><AllPost/></Protected>
  }/>
  <Route path="add-post" element={
    <Protected authentication><AddPost/></Protected>
  }/>
  <Route path="edit-post/:slug" element={
    <Protected authentication><EditPost/></Protected>
  }/>
  <Route path="post/:slug" element={<Post/>} />
</Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
        <RouterProvider router = {router}/>
    </Provider>
  </StrictMode>,
)
