import React from 'react'

function Header() {
  return (
    <header className='flex w-full bg-gray-700 justify-between px-3 py-1'>
        <div id='logo'>
            <img src="https://placehold.co/100x40" alt="logo" />
        </div>
        <nav className='w-1/4'>
          <ul className='flex items-center justify-between'>
            <li><a href='https://example.com' className='text-gray-200'>About</a></li>
            <li><a href='https://example.com' className='text-gray-200'>Contact</a></li>
            <li><button className='btn btn-sm'>View Cart</button></li>
            <li>
              <div class="avatar placeholder cursor-pointer">
                <div class="bg-gray-400 text-neutral-content rounded-full w-8">
                  <span class="text-xs text-white">UI</span>
                </div>
              </div>
            </li>
          </ul>
        </nav>
    </header>
  )
}

export default Header