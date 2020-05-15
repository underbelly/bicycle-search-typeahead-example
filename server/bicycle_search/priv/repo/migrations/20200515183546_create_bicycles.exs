defmodule BicycleSearch.Repo.Migrations.CreateBicycles do
  use Ecto.Migration

  def change do
    create table(:bicycles) do
      add :brand, :string

      timestamps()
    end

  end
end
