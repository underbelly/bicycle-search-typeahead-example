defmodule BicycleSearchWeb.GraphQL.Schema do
  use Absinthe.Schema

  import_types(BicycleSearchWeb.GraphQL.Typedefs)

  alias BicycleSearchWeb.GraphQL.Resolvers

  query do
    @desc "Get all bicycles"
    field :bicycles, list_of(:bicycle) do
      arg(:brand, :string)
      resolve(&Resolvers.list_bicycles/3)
    end
  end
end
