import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Film } from '../../../types/Films';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
    },
  }),
);

interface EpisodesListProps {
  episodes?: Film[];
  onSelect: (episodeUrl?: string) => void;
  selectedEpisodeUrl?: string;
}

export const EpisodesList = ({
  episodes,
  selectedEpisodeUrl,
  onSelect,
}: EpisodesListProps) => {
  const classes = useStyles();

  const handleSelectEpisode = (url?: string) => {
    onSelect(url);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {episodes?.map((episode) => (
          <ListItem
            button
            key={episode.episode_id}
            selected={episode.url === selectedEpisodeUrl}
            onClick={() => {
              handleSelectEpisode(episode.url);
            }}
          >
            <ListItemText primary={episode.title} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};
