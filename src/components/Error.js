const Error = () => {
    return (
        <div class="page-404">
            <div class="outer">
                <div class="middle">
                    <div class="inner">
                        <div class="inner-circle"><i class="fa fa-cogs"></i><span>500</span></div>
                        <span class="inner-status">Opps! Internal Server Error!</span>
                        <span class="inner-detail">Unfortunately we're having trouble loading the page you are looking for. Please come back in a while.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;