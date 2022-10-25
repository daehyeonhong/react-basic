export default function Profile() {
    return <div className={'profile'}>
        <img className={'photo'}
            src={'https://images.unsplash.com/photo-1526800544336-d04f0cbfd700?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2274&q=80'}
            alt={'avatar'}
        />
        <h1>Audrey</h1>
        <p>Web Developer</p>
    </div>;
}