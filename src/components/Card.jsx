export default function Card ({icon, title, desc}) {
    return(
          <>
              <div className="card">
              <div className="icon"><i className={icon}></i></div>
              <h3 className="title">{title}</h3>
              <p className="desc">{desc}</p>
              </div>
          </>

    )

}