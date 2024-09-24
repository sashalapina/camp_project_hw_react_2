export function PostListAfetrClick({ posts }) {

    return(
        <>
        <ul>{posts.map(item => (
            <li className="list-item" key={item.id}>
                <h3 className="third-title">{item.title}</h3>
                <p className="posts-item-text">{item.body}</p>
            </li>
        ))
        }
        </ul>
        </> 
    )
    
}