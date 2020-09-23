import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MainBar from '../MainBar/MainBar';
import Comments from '../Comments/Comments';
import CommentImg from '../CommentImg/CommentImg';

const PostDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(data => setDetail(data));
           // eslint-disable-next-line 
    }, []);

    const { title, body } = detail;

    const [text, setText] = useState([]);
    // eslint-disable-next-line
    const [img, setImg] = useState(CommentImg);

    useEffect( () =>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(res => res.json())
        .then(data =>{
            data.map((data, index) => (data.img = img[index].img));
            setText(data);
          });
    },[id, img]);

    const useStyles = makeStyles({
        root: {
            minWidth: 275,
        },
        title: {
            fontSize: 14,
        },
    });

    const classes = useStyles();

    return (
        <div>
            <MainBar></MainBar>
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        ID: {id}
                    </Typography>
                    <Typography variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </Card>
            <div>
                <h1>Comments</h1>
                {
                    text.map( comment => <Comments comment ={comment} key={comment.id}></Comments>)
                }
            </div>
        </div>
    );
};

export default PostDetail;