
const hashSpan = (Component: React.ComponentType, title: string) => () => (
    <section>
      <span id={title} className="block mt-[-120px] pb-[120px]">
        &nbsp;
      </span>

      <Component />
    </section>
  )

export default hashSpan