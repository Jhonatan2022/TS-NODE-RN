import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RegisterPage from './pages/registerPage'
import { AuthProvider } from './context/authContext'
import LoginPage from './pages/loginPage'
import ProfilePage from './pages/ProfilePage'
import ProtectedRoute from './ProtectedRoute'
import TasksPage from './pages/TasksPage'
import TasksFormPage from './pages/TasksFormPage'
import { TasksProvider } from './context/TasksContext'

function App() {
  return (
    <AuthProvider>
      <TasksProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>inicio</h1>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<TasksPage />} />
              <Route path="/new" element={<TasksFormPage />} />
              <Route path="/tasks/:id" />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>

            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  )
}

export default App
