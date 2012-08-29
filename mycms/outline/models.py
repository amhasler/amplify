from django.db import models
from django.utils.translation import ugettext_lazy as _
from cms.models import CMSPlugin
from cms.utils.helpers import reversion_register


# Stores the actual data
class Outline(models.Model):

    title = models.CharField(_("name"), max_length=255, unique=True)
    body = models.TextField(_("name2"), max_length=1000, unique=True)
    html = models.TextField(_("HTML"), blank=True)
#    template = models.CharField(_("template"), max_length=50, blank=True, \
#        help_text=_('Enter a template (i.e. "snippets/plugin_xy.html") which will be rendered. ' + \
#        'If "template" is given, the contents of field "HTML" will be passed as template variable {{ html }} to the template. ' + \
#        'Else, the content of "HTML" is rendered.'))

    def __unicode__(self):
        return self.name

    class Meta:
        ordering = ['title']
        verbose_name = _("Outline")
        verbose_name_plural = _("Outlines")

# Plugin model - just a pointer to Snippet
class OutlinePtr(CMSPlugin):
    snippet = models.ForeignKey(Outline)

    class Meta:
        verbose_name = _("Outline")

    search_fields = ('outline__html',)

    def __unicode__(self):
        # Return the referenced snippet's name rather than the default (ID #)
        return self.outline.name


# We don't both with SnippetPtr, since all the data is actually in Snippet
reversion_register(Outline)

