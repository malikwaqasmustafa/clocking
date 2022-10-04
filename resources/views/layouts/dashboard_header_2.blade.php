<div class="overlay"></div>

<style>
    .mainMenu .profile article {
        padding: 11px 52px 0 0;
    }
    .ProfileInfo{
        top: 3px !important;
    }
</style>

<div class="topBar">
    <a href="#" class="logo"><img src="{{ asset('images/loginPage-logo.png') }}" alt="CareVision" style="width: auto"></a>

    <section class="rightSide" style="margin-right: 15px">
        <a href="{{route('logout')}}" class="cta">
            Logout
        </a>
    </section>
</div>
<style>
    .mainMenu li.active{
        background-color: #2d8576;
        display: inline;
    }
    .mainMenu li img{
        margin-bottom: 3px;
    }
    .mainMenu li{
        padding-bottom: 3px;
    }
</style>
<section class="mainMenu">
    <ul>
        <li class="{{ (\Request::route()->getName() == 'terminal.add') ? 'active' : '' }} proceed_to_orders_link">
            <a href="{{ route('terminal.add') }}">Add New Terminal</a>
        </li>
        <li class="{{ (\Request::route()->getName() == 'terminal.add') ? 'active' : '' }}">
            <a href="{{ route('terminal.add') }}">
                Add Terminal
            </a>
        </li>
        <li class="{{ (\Request::route()->getName() == 'force.sync') ? 'active' : '' }}">
            <a href="{{ route('force.sync') }}">
                Force Sync
            </a>
        </li>
        <li class="{{ (\Request::route()->getName() == 'database.backup') ? 'active' : '' }}">
            <a href="{{ route('database.backup') }}">
                Database Backup
            </a>
        </li>
    </ul>
</section>
<form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
    {{ csrf_field() }}
</form>

<section class="background">
    <img src="/images/pageBackground-texture.png" alt="">
</section>
