defmodule BicycleSearchWeb.GraphQL.Typedefs do
  use Absinthe.Schema.Notation

  object :bicycle do
    field :id, :id
    field :brand, :string
  end
end
