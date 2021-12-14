

export default (props) => {
    <div className="nav-item p-3" key={props.key}>
        <a className="text-white" href={props.link}>
            <i className={props.icon}></i>    
        </a>
    </div>
}



