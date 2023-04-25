import {GiPegasus} from 'react-icons/gi'
function Footer() {

  const footerYear = new Date().getFullYear()

  return (
    <footer className="footer p-4 bg-gray-700 text-primary-content footer-center">
      <div>
        <GiPegasus className="text-3xl" />
        <p>Copyright &copy; {footerYear}. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer