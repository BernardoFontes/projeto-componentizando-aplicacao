import { Button } from './Button';
import '../styles/sidebar.scss';

interface GenresItemProps{
  genre: {
      id: number;
      title: string;
      name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  },
  selectedGenreId: number,
  handleClickButton: Function;
}

export function SideBar(props: GenresItemProps) {
  return (
            <Button
              key={String(props.genre.id)}
              title={props.genre.title}
              iconName={props.genre.name}
              onClick={() => props.handleClickButton(props.genre.id)}
              selected={props.selectedGenreId === props.genre.id}
            />
  )
}