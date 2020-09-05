import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DetailsIcon from '@material-ui/icons/Details';
import { useHistory } from 'react-router';


const Post = ({post}) => {
    const {id, title, body} = post;

    const useStyles = makeStyles({
        root: {
            maxWidth: 345,
        },
        media: {
            height: 140,
        },
    });
    
    const classes = useStyles();

    let detail = useHistory();
    let handleClick = () => {
        detail.push(`/post/${id}`);
    }

    return (
        
        <div style={{ width: '100%'}}>

            <Box display="flex" justifyContent="center" m={3} p={3} >
                <Box p={1}>

                    <Card className={classes.root} style={{backgroundImage:'linear-gradient(30deg, #90a4ae, #eceff1)'}}>

                        <CardActionArea>
                            
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {id}. {title}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {body}
                                </Typography>
                                </CardContent>

                            </CardActionArea>

                            <CardActions>

                                <Button onClick={() => handleClick()} size="small" color="primary">
                                    <DetailsIcon />  Learn More
                                </Button>
                            </CardActions>

                        </Card>
                </Box>
            </Box>
            
        </div>
        
  );
}

export default Post;