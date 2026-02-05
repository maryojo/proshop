import PokemonPage from "@/registry/new-york/blocks/example-complex-component/page"
import LoginTemplate from "@/registry/new-york/blocks/login-template/page"

interface TemplatePageProps {
  params: {
    id: string
  }
}

export default function TemplatePage({ params }: TemplatePageProps) {
  const templates: { [key: string]: React.ReactNode } = {
    "login-template": <LoginTemplate />,
    "complex-component": <PokemonPage />,
  }

  const content = templates[params.id]

  if (!content) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold">Template not found</h1>
      </div>
    )
  }

  return <>{content}</>
}
