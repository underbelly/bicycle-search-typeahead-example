defmodule BicycleSearch.Bicycle do
  use Ecto.Schema
  import Ecto.Changeset

  schema "bicycles" do
    field :brand, :string

    timestamps()
  end

  @doc false
  def changeset(bicycle, attrs) do
    bicycle
    |> cast(attrs, [:brand])
    |> validate_required([:brand])
  end
end
