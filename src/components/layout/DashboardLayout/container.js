import { useEffect, useState } from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'

// import { useHistory } from 'react-router-dom'

const Container = ({ children }) => {
  // const history = useHistory()

  // State
  const state = useStoreState(s => ({
    me: s.me,
    logout: s.logout,
  }))

  // Actions
  const actions = useStoreActions(a => ({
    getMe: a.getMe,
    postLogout: a.postLogout,
    setLogout: a.setLogout,
  }))

  const [isLoading, setIsLoading] = useState(false)
  const [me, setMe] = useState(null)

  useEffect(() => {
    actions.getMe()
    setIsLoading(true)
  }, [])

  useEffect(() => {
    const { status, payload } = state.me

    if (status === 2) {
      setMe(payload)
      setIsLoading(false)
    } else if (status === 3) {
      // sessionStorage.removeItem('oauth')
      setIsLoading(false)
    }
  }, [state.me])

  useEffect(() => {
    const { status } = state.logout

    if (status === 2) {
      actions.setLogout({ status: 0, payload: null })

      sessionStorage.removeItem('oauth')
      history.go(0)
    } else if (status === 3) {
      actions.setLogout({ status: 0, payload: null })
    }
  }, [state.logout])

  const handleLogout = () => {
    setIsLoading(true)

    if (sessionStorage.getItem('oauth')) {
      sessionStorage.removeItem('oauth')
      history.go(0)

      // const oauth = JSON.parse(sessionStorage.getItem('oauth'))
      // actions.postLogout({
      //   token: oauth.access_token,
      //   client_id: import.meta.env.VITE_SECRET_ID,
      //   client_secret: import.meta.env.VITE_SECRET_KEY,
      // })
    }
  }

  return children({ isLoading, me, handleLogout })
}

export default Container
