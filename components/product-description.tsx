interface ProductDescriptionProps {
  description: string
  sections?: {
    title: string
    content: string
  }[]
}

export function ProductDescription({ description, sections = [] }: ProductDescriptionProps) {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold mb-3">Descripción</h3>
        <div className="prose prose-sm max-w-none text-muted-foreground">
          <p>{description}</p>
        </div>
      </div>

      {sections.map((section, index) => (
        <div key={index}>
          <h3 className="text-lg font-bold mb-2">
            <span className="text-gold">{section.title}</span>
          </h3>
          <div className="prose prose-sm max-w-none text-muted-foreground">
            <p>{section.content}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
