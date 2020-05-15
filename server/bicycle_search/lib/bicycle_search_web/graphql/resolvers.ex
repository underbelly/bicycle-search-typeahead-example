defmodule BicycleSearchWeb.GraphQL.Resolvers do
  alias BicycleSearch.Database

  def list_bicycles(_parent, _args, _resolution) do
    {:ok, Database.all_bicycles()}
  end
end
