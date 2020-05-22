defmodule BicycleSearch.Database do
  import Ecto.Query, only: [from: 2]
  alias BicycleSearch.{Bicycle, Repo}

  # Bicycles

  def all_bicycles(%{brand: brand}) do
    from(b in Bicycle, where: ilike(b.brand, ^"%#{brand}%"))
    |> Repo.all()
  end

  def all_bicycles(%{}) do
    Repo.all(Bicycle)
  end


  def get_bicycle(id) do
    Repo.get(Bicycle, id)
  end
end
