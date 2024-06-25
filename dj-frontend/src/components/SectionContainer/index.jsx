import './style.css'

export default function SectionContainer({children, style}) {

    return <section style={style}>
        {children}
    </section>
}