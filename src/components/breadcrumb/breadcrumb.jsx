import { Breadcrumbs, Link, Typography } from "@mui/material"
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
const MyBreadcrumb = (props) => {
    const breadcrumbs = [

    ];
    return (
        <div className=" breadcrumb">
            <Breadcrumbs separator="›" aria-label="breadcrumb">
                <Link underline="hover" key="1" color="inherit" href="/" >
                    Home
                </Link>,
                {props.parentThisPage?<Link
                    underline="hover"
                    key="2"
                    color="inherit"
                    href="/menu"
                >
                    {props.parentThisPage}
                </Link>:[]}
                {<Typography  key="3" color="text.primary">
                    {props.thisPage}
                </Typography>}
            </Breadcrumbs>
        </div>
    )
}
export default MyBreadcrumb