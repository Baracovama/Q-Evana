"""empty message

Revision ID: 8461d444d40b
Revises: 767327e81485
Create Date: 2022-08-03 16:48:23.852882

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '8461d444d40b'
down_revision = '767327e81485'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=300),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('user', 'name',
               existing_type=sa.VARCHAR(length=300),
               nullable=False)
    # ### end Alembic commands ###
