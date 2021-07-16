import { Button, Container, styled } from '@material-ui/core';
import { useState, useEffect, useContext } from 'react';
import { filmsService } from '../../../service/films';
import { Film } from '../../../types/Films';
import { StepperContext } from '../../stepperContext';
import { EpisodeCard } from './episodeCard';
import { EpisodesList } from './episodesList';

const EpisodesContainer = styled(Container)({
  display: 'flex',
  justifyContent: 'space-between',
});

export const EpisodesStep = () => {
  const [films, setFilms] = useState<Film[] | undefined>([]);
  const [selectedFilmUrl, setSelectedFilmUrl] = useState<string>();
  const stepper = useContext(StepperContext);

  useEffect(() => {
    filmsService.fetchAll().then(setFilms);
  }, []);

  const handleSelect = () => {
    stepper.setSelectedEpisode(
      films?.find((film) => film.url === selectedFilmUrl),
    );
    stepper.nextStep();
  };

  return (
    <div>
      <EpisodesContainer>
        <EpisodesList
          episodes={films}
          selectedEpisodeUrl={selectedFilmUrl}
          onSelect={setSelectedFilmUrl}
        />
        <EpisodeCard episodeUrl={selectedFilmUrl} />
      </EpisodesContainer>
      <Container>
        <Button
          color="primary"
          variant="contained"
          onClick={handleSelect}
          disabled={!selectedFilmUrl}
        >
          Select episode
        </Button>
      </Container>
    </div>
  );
};
