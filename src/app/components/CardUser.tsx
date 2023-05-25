import React from 'react'
import Image from 'next/image'

interface User {
  name: string
}

interface CardUserProps {
  user: User
}

const CardUser: React.FC<CardUserProps> = ({ user }) => {
  return (
    <div style={{ border: '1px solid #000', width: '100%', padding: '10px' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <Image
          style={{ borderRadius: '100%' }}
          src="/avatar.webp"
          width={100}
          height={100}
          alt={user.name}
        />
        <h2>{user.name}</h2>
      </div>
    </div>
  );
};

export default CardUser
