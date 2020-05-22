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
    [brand: "Argon 18"],
    [brand: "Aventon"],
    [brand: "BMC"],
    [brand: "Bianchi"],
    [brand: "Brompton"],
    [brand: "Brunswick"],
    [brand: "Cannondale"],
    [brand: "Canyon"],
    [brand: "Cervelo"],
    [brand: "Cinelli"],
    [brand: "Crust"],
    [brand: "Eddy Merckx"],
    [brand: "Engine 11"],
    [brand: "Felt"],
    [brand: "Fuji"],
    [brand: "Fyxation"],
    [brand: "GT"],
    [brand: "Giant"],
    [brand: "Haro"],
    [brand: "Huffy"],
    [brand: "Ibis"],
    [brand: "Jamis"],
    [brand: "Klein"],
    [brand: "Kona"],
    [brand: "Low//"],
    [brand: "Mongoose"],
    [brand: "Orbea"],
    [brand: "Pogliaghi"],
    [brand: "Raleigh"],
    [brand: "Ridley"],
    [brand: "Ritchey"],
    [brand: "Salsa"],
    [brand: "Santa Cruz"],
    [brand: "Schwinn"],
    [brand: "Specialized"],
    [brand: "Surley"],
    [brand: "Trek"],
    [brand: "Univega"]
  ]
  |> Enum.map(fn data_row ->
    data_row ++ [updated_at: timestamp, inserted_at: timestamp]
  end)

Repo.insert_all(Bicycle, bikes)
