const fixPokeName = (name) => {
  if (
    name === 'mr-mime' ||
    name === 'ho-oh' ||
    name === 'mime-jr' ||
    name === 'porygon-z' 
  ) {
    return name
  }
  if (name === 'wormadam-plant')
    return 'wormadam'
  if (name === 'shaymin-land')
    return 'shaymin'
  if (name === 'basculin-red-striped')
    return 'basculin'
  if (name === 'darmanitan-standard')
    return 'darmanitan'
  if (name === 'thundurus-incarnate')
    return 'thundurus'
    if (name === 'landorus-incarnate')
    return 'landorus'
  if (name === 'tornadus-incarnate')
    return 'tornadus'
  if (name === 'meloetta-aria')
    return 'meloetta'
  if (name === 'keldeo-ordinary')
    return 'keldeo'
  if (name === 'aegislash-shield')
    return 'aegislash'
  if (name === 'meowstic-male')
    return 'meowstic'
  if (name === 'pumpkaboo-average')
    return 'pumpkaboo'
  if (name === 'gourgeist-average')
    return 'gourgeist'
  if (name === 'giratina-altered')
    return 'giratina'
  if (name === 'deoxys-normal')
    return 'deoxys'

  return name.replace('-','')
}
export default fixPokeName