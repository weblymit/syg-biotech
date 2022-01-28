export function H2({ title, className }) {
  return (
    <>
      <h2
        className={`pb-3 text-center text-4xl font-bold text-secondary lg:text-6xl ${className}`}
      >
        {title}
      </h2>
    </>
  )
}
export function SubText({ title, className }) {
  return (
    <>
      <p
        className={`pb-3 text-center text-lg "${className}`}
      >
        {title}
      </p>
    </>
  )
}


