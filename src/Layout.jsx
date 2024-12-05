import { Link, Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
          <header>
            <nav>
                <Link to="/" className="nav-link">Home</Link>
            <div className="flex items-center space-x-4">
                <Link to="/create" className="nav-link">New Post</Link>
            </div>
            </nav>
          </header>
          <main>
            {<Outlet/>}
          </main>
        </>
    )
}