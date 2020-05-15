# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     BicycleSearch.Repo.insert!(%BicycleSearch.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias BicycleSearch.{Bicycle, Repo}

timestamp =
  NaiveDateTime.utc_now()
  |> NaiveDateTime.truncate(:second)

bikes =
  [
    [brand: "Cinelli"],
    [brand: "Bianchi"],
    [brand: "Specialized"],
    [brand: "Cervelo"],
    [brand: "Surley"],
    [brand: "Ritchey"],
    [brand: "Aventon"],
    [brand: "Engine 11"],
    [brand: "Low//"],
    [brand: "Trek"],
    [brand: "Salsa"],
    [brand: "GT"],
    [brand: "Huffy"],
    [brand: "Raleigh"],
    [brand: "Haro"],
    [brand: "Schwinn"],
    [brand: "Crust"],
    [brand: "Giant"]
  ]
  |> Enum.map(fn data_row ->
    data_row ++ [updated_at: timestamp, inserted_at: timestamp]
  end)

Repo.insert_all(Bicycle, bikes)
