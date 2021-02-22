import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({ user }) => {
  return (
    <div className='card' style={{ width: '20.2rem' }}>
      <img style={{ width: '20.2rem' }} src={user.avatar_url} alt={user.login} className='card-image-top' />
      <div className='card-body'>
        <h5 className='card-title'>{user.login}</h5>
        <Link to={`/profile/${user.login}`} className='btn btn-primary'>
          Open
        </Link>
      </div>
    </div>
  )
}
