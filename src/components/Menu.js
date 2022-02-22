import { useEffect } from 'react'

const Menu = ({ title, menuObject }) => {
    useEffect(() => {
        const allLi = document
        .querySelector(".menuContainer ul")
        .querySelectorAll('li');

        function changeMenuActive() {
            allLi.forEach((n) => n.classList.remove('active'));
            this.classList.add('active');
        }

        allLi.forEach((n) => n.addEventListener("click", changeMenuActive));
    }, []);

  return (
    <div className='menuContainer'>
        <p className='title'>{title}</p>

        <ul>
            {
                menuObject && menuObject.map((menu) => (
                    <li key={menu.id}>
                        {" "}
                        <a href="https://www.google.com/">
                            <i>{menu.icon}</i>
                            <span>{menu.name}</span>
                       </a>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export {Menu}