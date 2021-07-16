import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { filmsService } from '../../../service/films';
import { Film } from '../../../types/Films';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles({
  root: {
    width: 345,
  },
  media: {
    height: 140,
  },
});

interface EpisodeCardProps {
  episodeUrl?: string;
}

export const EpisodeCard = ({ episodeUrl }: EpisodeCardProps) => {
  const classes = useStyles();
  const [episode, setEpisode] = useState<Film | undefined>();

  useEffect(() => {
    if (!episodeUrl) return;
    filmsService.fetchFilmByUrl(episodeUrl).then(setEpisode);

    return () => {
      setEpisode(undefined);
    };
  }, [episodeUrl]);

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://sun9-41.userapi.com/unlIPtpXzQtKbmbHSAhHtr3WMHXCmAuH0Ef4ZQ/Jti48-ed3Yw.jpg"
        title="Star Wars poster"
      />
      <CardContent>
        {episodeUrl ? (
          <>
            <Typography gutterBottom variant="h5" component="h2">
              {episode ? episode?.title : <Skeleton height={50} />}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {episode ? episode?.opening_crawl : <Skeleton height={180} />}
            </Typography>
          </>
        ) : (
          <Typography gutterBottom variant="h5" component="h2">
            Please select an episode
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};
