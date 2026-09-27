import marioImg from '../../public/img/mario.jpg';
import minecraftImg from '../../public/img/minecraft.jpg';
import rocketLeagueImg from '../../public/img/Rocket_League.jpg';

export const productos = [
  {
    id: 1,
    nombre: 'Super Mario Bros.',
    precioNormal: 29990,
    precioOferta: 24990,
    descripcion: 'Juego clásico de aventuras y plataformas.',
    imagen: marioImg
  },
  {
    id: 2,
    nombre: 'Minecraft',
    precioNormal: 24990,
    precioOferta: 19990,
    descripcion: 'Juego de construcción y exploración.',
    imagen: minecraftImg
  },
  {
    id: 3,
    nombre: 'Rocket League',
    precioNormal: 29990,
    precioOferta: 15990,
    descripcion: 'Juego de fútbol con vehículos.',
    imagen: rocketLeagueImg
  }
];
