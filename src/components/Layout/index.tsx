import { Outlet, useLocation, useNavigate } from "react-router-dom";

const Layout = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const handleRedirect = (url: any) => {
        navigate(`${url}`);
    }

  return (
    <>
    
      <div className="container pb-5">
            <header className="d-flex justify-content-start py-3">
                <ul className="nav nav-pills px-3">
                    <li className="nav-item px-3 pe-auto">
                        <a className={`nav-link px-5 pe-auto ${pathname === '/' ? 'active' : ''}`} aria-current="page" onClick={()=>handleRedirect('')}>Home</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className={`nav-link px-5 pe-auto ${pathname === '/logo' ? 'active' : ''}`} aria-current="page" onClick={()=>handleRedirect('/logo')}>Logo</a>
                    </li>
                    <li className="nav-item px-3">
                        <a className={`nav-link px-5 pe-auto ${pathname === '/filter' ? 'active' : ''}`} aria-current="page" onClick={()=>handleRedirect('/filter')}>Filter</a>
                    </li>
                </ul>
            </header>
        </div>

      <Outlet />
    </>
  )
};

export default Layout;