  
import os
from flask_admin import Admin
from .models import db, User, Genero, Peliculas, GeneroPeli, Favoritos
from flask_admin.contrib.sqla import ModelView

#Se elimino de la linea 4 : Favorites_Peliculas, Proximamente, Buscador,

def setup_admin(app):
    app.secret_key = os.environ.get('FLASK_APP_KEY', 'sample key')
    app.config['FLASK_ADMIN_SWATCH'] = 'cerulean'
    admin = Admin(app, name='Q`uevana', template_mode='bootstrap3')

    
    # Add your models here, for example this is how we add a the User model to the admin
    admin.add_view(ModelView(User, db.session))
    # admin.add_view(ModelView(Favorites_Peliculas, db.session))
    admin.add_view(ModelView(Genero, db.session))
    admin.add_view(ModelView(Peliculas, db.session))
    admin.add_view(ModelView(GeneroPeli, db.session))
    admin.add_view(ModelView(Favoritos, db.session))
    # admin.add_view(ModelView(Buscador, db.session))


    # You can duplicate that line to add mew models
    # admin.add_view(ModelView(YourModelName, db.session))