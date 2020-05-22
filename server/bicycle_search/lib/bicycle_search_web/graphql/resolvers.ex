defmodule BicycleSearchWeb.GraphQL.Resolvers do
  alias BicycleSearch.Database

  def list_bicycles(_parent, args, _resolution) do
    {:ok, Database.all_bicycles(args)}
  end
end
