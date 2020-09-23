import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const Post = (props) => {
    const { title, body, id } = props.post;

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        link: {
            textDecorationLine: 'none',
        }
    });

    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography variant="body2" component="p">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/post/${id}`} className={classes.link}>
                    <Button variant="contained" color="primary">
                        See more  <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default Post;