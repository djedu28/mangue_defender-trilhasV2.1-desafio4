import './style.css'

export default function SectionContainer({children, style, id}) {

    return <section style={style} id={id}>
        {children}
    </section>
}