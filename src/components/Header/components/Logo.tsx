import logo from '../../../assets/mouse.svg';
const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
        <img src={logo} alt='logo-img' className='text-white' />
        <span>foo-rum</span>
    </div>
  )
}

export default Logo